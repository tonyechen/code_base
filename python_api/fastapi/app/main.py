from fastapi import FastAPI, status, HTTPException, Response, Depends
from fastapi.params import Body
from pydantic import BaseModel
from typing import Optional
from random import randrange
import psycopg2
from psycopg2.extras import RealDictCursor
import time
from . import models
from .database import engine, Session, get_db

# Create the tables before the app start
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Post Schema
class Post(BaseModel):
    title: str
    content: str
    published: bool = True # default value
    # rating: Optional[int] = None # optional value

while True:
    
    try:
        conn = psycopg2.connect(host='localhost', database='fastapi', user='postgres', password='Iloveramen247', cursor_factory=RealDictCursor)
        cursor = conn.cursor()
        print('Database connection was successful')
        break
    except Exception as error:
        print('Connecting to databawse failed')
        print('Error: ' + error)
        time.sleep(2)

# # temp database
# my_posts = [{"title": "title of post 1", "content": "content of post 1", "id": 1}, {"title": "favorite foods", "content": "I like Ramen", "id": 2}]

# def find_post(id):
#     for p in my_posts:
#         if p["id"] == id:
#             return p

# def find_index_post(id):
#     for i, p in enumerate(my_posts):
#         if p['id'] == id:
#             return i

@app.get('/')
async def root():
    return {'message': "Welcome to my API"}

@app.get('/sqlalchemy')
def test_posts(db: Session = Depends(get_db)):

    posts = db.query(models.Post).all()
    return {'data': posts}

@app.get('/posts')
def get_posts(db: Session = Depends(get_db)):

    posts = db.query(models.Post).all()
    # RAW SQL
    # cursor.execute('SELECT * FROM posts;')
    # posts = cursor.fetchall()
    return {"data": posts}

@app.get("/posts/{id}")
def get_post(id: int, db: Session = Depends(get_db)):
    post = db.query(models.Post).filter(models.Post.id == id).first()
    print(post)

    # RAW SQL
    # cursor.execute('SELECT * from posts Where id = %s', (str(id),))
    # post = cursor.fetchone()

    if not post:
        # response.status_code = status.HTTP_404_NOT_FOUND
        # return {'message': f"post with id: {id} was not found"}
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"post with id : {id} was not found")
    return {"post_detail": post}

@app.post("/posts", status_code=status.HTTP_201_CREATED)
def create_posts(post: Post, db: Session = Depends(get_db)):
    
    new_post = models.Post(**post.dict())
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

    return {"data": new_post}

@app.delete('/posts/{id}', status_code=status.HTTP_204_NO_CONTENT)
def delete_post(id: int, db: Session = Depends(get_db)):
    deleted_post = db.query(models.Post).filter(models.Post.id == id)
    
    # RAW SQL
    # cursor.execute('DELETE FROM posts WHERE id = %s RETURNING *', (str(id),))
    # deleted_post = cursor.fetchone()
    # conn.commit()

    if deleted_post.first() == None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"post with id: {id} does not exist")
    
    deleted_post.delete(synchronize_session=False)
    db.commit()

    return Response(status_code=status.HTTP_204_NO_CONTENT)

@app.put("/posts/{id}")
def update_post(id: int, post: Post, db: Session = Depends(get_db)):
    post_query = db.query(models.Post).filter(models.Post.id == id)

    # RAW SQL
    # cursor.execute('UPDATE posts SET title = %s, content = %s, published = %s WHERE id = %s RETURNING *', (post.title, post.content, post.published, str(id)))
    # updated_post = cursor.fetchone()
    # conn.commit()

    if post_query.first() == None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"post with id: {id} does not exist")
    
    post_query.update(post.dict(), synchronize_session=False)
    db.commit()

    return {"data": post_query.first()}
