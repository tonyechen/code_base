from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
import psycopg2
from psycopg2.extras import RealDictCursor
import time
from . import models
from .database import engine
from .routers import post, user, auth, vote
from .config import settings


# Create the tables before the app start
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["*"]

app.add_middleware(CORSMiddleware,
    allow_origins=[origins],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

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

app.include_router(post.router)
app.include_router(user.router)
app.include_router(auth.router)
app.include_router(vote.router)