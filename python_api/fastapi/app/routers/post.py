from .. import models, schema, oauth2
from fastapi import FastAPI, status, HTTPException, Response, Depends, APIRouter
from ..database import Session, get_db
from typing import List, Optional


router = APIRouter(prefix='/posts', tags=['Posts'])

@router.get('/', response_model=List[schema.Post])
def get_posts(db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user), limit: int = 10, skip: int = 0, search: Optional[str] = ""):

    posts = db.query(models.Post).filter(models.Post.title.contains(search)).limit(limit).offset(skip).all()
    # RAW SQL
    # cursor.execute('SELECT * FROM posts;')
    # posts = cursor.fetchall()
    return posts

@router.get("/{id}", response_model=schema.Post)
def get_post(id: int, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    post = db.query(models.Post).filter(models.Post.id == id).first()
    print(post)

    # RAW SQL
    # cursor.execute('SELECT * from posts Where id = %s', (str(id),))
    # post = cursor.fetchone()

    if not post:
        # response.status_code = status.HTTP_404_NOT_FOUND
        # return {'message': f"post with id: {id} was not found"}
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"post with id : {id} was not found")
    return post

@router.post("/", status_code=status.HTTP_201_CREATED, response_model=schema.Post)
def create_posts(post: schema.PostCreate, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    
    print(current_user.email)
    new_post = models.Post(owner_id=current_user.id, **post.dict())
    # equivalent to:
    # new_post = models.Post(title=post.title, content=post.content, published=post.published)
    
    db.add(new_post)
    db.commit();
    db.refresh(new_post)

    # RAW SQL
    # # use %s syntax from psycopg to sanitize input to prevent sql injection attack
    # cursor.execute('INSERT INTO posts (title, content, published) VALUES (%s,  %s, %s) RETURNING *', (post.title, post.content, post.published))
    # new_post = cursor.fetchone()

    # conn.commit()

    return new_post

@router.delete('/{id}', status_code=status.HTTP_204_NO_CONTENT)
def delete_post(id: int, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    deleted_post = db.query(models.Post).filter(models.Post.id == id)
    
    # RAW SQL
    # cursor.execute('DELETE FROM posts WHERE id = %s RETURNING *', (str(id),))
    # deleted_post = cursor.fetchone()
    # conn.commit()

    if deleted_post.first() == None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"post with id: {id} does not exist")
    
    if deleted_post.first().owner_id != current_user.id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=f"NOT authroized to perform requested action")

    deleted_post.delete(synchronize_session=False)
    db.commit()

    return Response(status_code=status.HTTP_204_NO_CONTENT)

@router.put("/{id}", response_model=schema.Post)
def update_post(id: int, post: schema.PostCreate, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    post_query = db.query(models.Post).filter(models.Post.id == id)

    # RAW SQL
    # cursor.execute('UPDATE posts SET title = %s, content = %s, published = %s WHERE id = %s RETURNING *', (post.title, post.content, post.published, str(id)))
    # updated_post = cursor.fetchone()
    # conn.commit()

    if post_query.first() == None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"post with id: {id} does not exist")
    
    print(current_user.id)

    if post_query.first().owner_id != current_user.id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized to perform the requested action")
    
    post_query.update(post.dict(), synchronize_session=False)
    db.commit()

    return post_query.first()
