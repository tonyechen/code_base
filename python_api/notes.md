# Python API Development Guide:
# Notes on Python
creating virtual environment:
```powershell
python -m venv <name>
```
activating virtual environment, call path to the activate script, sample:
```powershell
venv/Scripts/activiate
```

decorator function:
```python
@app.get("/")
def root():
    return {"hello world"}
```
- decorator function @decorator takes in function and modify it, the following code blocks are equivalent and have the same output
```python
def decorator(func):
    def wrapper():
        func()
        print("!")
    return wrapper

def foo():
    print("Hi Tony")

foo = decorator(foo)
foo()
# output:
# Hi Tony!
```
```python
def decorator(func):
    def wrapper():
        func()
        print("!")
    return wrapper

@decorator
def foo():
    print("Hi Tony")

foo()
# output:
# Hi Tony!
```
read when have time: https://stackoverflow.com/questions/739654/how-do-i-make-function-decorators-and-chain-them-together/1594484#1594484

# FastAPi
## start server:
```powershell
uvicorn <path.to.server>:app --reload
```

- FastAPI automatically convert python dictionary to JSON object:
```python
@app.get('/')
async def root():
    return {'message': "Hello World"}
```
- the server will go through each route sequentially and find the first best match

## Schema Validation:
- a format of data that the server wants. 
- allow us to validate the data, force the client to send data in a schema that the server expects

## Pydantic
In this tutorial we are using pydantic for schema validation
```python
from pydantic import BaseModel
# for python 3.9+
from typing import Optional

class Schema(BaseModel):
    var_name: type
    var_name: type = default_value
    var_name: Optional[type]
```
## Status Code:
Hard code:
```python
from fastapi import Response

# just an example
@app.get('/'):
def root(response: Response):
    response.status_code = 404 # some status code
```
FastAPI library:
```python
from fastapi import status
def root(response: Response):
    response.status_code = status.HTTP_404_NOT_FOUND # some status code
```
Instead of hard coding exception handler, FastAPI has a built in module that does it for you:

HTTPException module:
```python
from fastapi import HTTPException
def root():
    raise HTTPException(status_code=404, detail=f'some error message')
```
Setting Default for a path:
```python
@app.post('/posts', status_code=status.HTTP_404_NOT_FOUND)
```

## Router
```python
from fastapi import APIRouter

router = APIRouter(prefix='/posts', tags=['Posts'])

@router.get('/')
def get_posts():
```

## Auto Documentation:
FastAPI auto-generate documentation for api routes:
```
https://localhost:8000/docs
```
and
```
https://localhost:8000/redoc
```
# Databases - PostgreSQL
SQL Guide: https://www.w3schools.com/sql/default.asp
## Tables:
- represent a subject or event in an application
    - can have tables for users, or products, or purchases.
    - These tables will have simple relationship with each other
    - Design the relationship between the tables beforehand so we can have an efficient database
## Columns Vs Rows:
- cols of a talbe represent a different attribute
- rows represent different entries in the table

## Datatypes
- Databases have datatypes just like programming language

## Primary Key
- a column or agroup of columns that uniquely identifies each row in a table
- Table can have one and only one primary key

## Unique Constraints
- A UNIQUE constraint can be applied to any column to make sure every record has a unique value for that column

## Null Constraints
- By default, when adding a new entry to a database, any column can be left lanck. When a column is left blank, it has a null value
- If you need column to be properly filled in to create a new record, a NOT NULL constraint can be added to the column to ensure that the column is never left blank

## AS keyword
- use as to rename column name when retrieving data
```SQL
SELECT id as product_id, name as product_name, price as product_price FROM products;
```

## WHERE keyword
- filter results, 
Operators: https://www.w3schools.com/sql/sql_where.asp

## ORDER BY
- order the elements hehe

## RETURNING
- use in conjunction with INSERT INTO to return the updated columns

## FOREIGN KEY
- constraint that references column of another table 
```SQL
CREATE TABLE Orders (
    OrderID int NOT NULL PRIMARY KEY,
    OrderNumber int NOT NULL,
    PersonID int FOREIGN KEY REFERENCES Persons(PersonID)
);
```

## Composite Keys
- primary key spans multiple columns
```SQL
CREATE TABLE student
    (rollNumber INT, 
    name VARCHAR(30), 
    class VARCHAR(30), 
    section VARCHAR(1), 
    mobile VARCHAR(10),
    PRIMARY KEY (rollNumber, mobile));
```

# Python and Raw SQL
- Need Postgres Driver to integrate postgres with python, this apply to any kind of database we are using
- In this course we're using Psycopg
documentation: https://www.psycopg.org/docs/
# ORMS
link to very useful article: https://www.freecodecamp.org/news/what-is-an-orm-the-meaning-of-object-relational-mapping-database-tools/
- aka Object Relational Mapping
- ORM is a layer of absraction that sits between the database and us
- we can perform all database operations through traditional python code.

## SQLAlchemy
- one of the most popular python ORMs
- it is a standalone library and has no association with FastAPI. It can be used with any other python web frameworks or any python based application

documentation with fastapi: https://fastapi.tiangolo.com/tutorial/sql-databases/

unique url to connect to database:
```
<database>://<username>:<password>@<ip-address/hostname>/<database_name>
```

# Pydantic Models
Really nice graph that explain the relationship between pydantic models and sqlalchemy orm model:
![alt text](https://d2o1p3wqepjvn9.cloudfront.net/media/uploads/2021/03/20/fastapi-request-response.png)

- can create request model and response model. They have the same structure

# Authentication and Users
FastApi security intro link: https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/
## Hashing User password:
```
pip install passlib[bcrypt]
```
```python
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')

def hash(password: str):
    return pwd_context.hash(password)
```

## JWT Token
offical explanation: https://jwt.io/introduction
- in simple terms, it's an ecoded string for securely transmitting information between parties as a JSON object. It can be verified and trusted because it is digitally signed.
- very helpful graph: https://www.youtube.com/watch?v=0sOvCWFmrtA&list=PLbYOMPK70mxpvCXIY9wFhC9zbimybQD6z&index=34&t=24282s

Authentication Flow:
- the client tries to log in, with correct username and password, the server/api will generate and send back a signed JWT token
- the client then sends request with the provided JWT token in the header for anything that require to be logged in
- the server/api verify that the token is valid before sending back the data

3 things that we need:
1. the secret key
2. algorithm
3. expiration time

# Database Migration w/ Alembic
- database migrations allow us to incrementally track changes to database schema and rollback changes to any point in time, kind of like git but for databases
- we will use Alemebic which is built for sqlalchemy to make changes to our database

```shell
alembic revision -m "message"
```
generates a python file within versions that include `def upgrade` and `def downgrade` where upgrade handle the changes and downgrade handle rollback

```shell
alembic upgrade/downgrade <revision ID>
```
update current version to the targeted version

# Deployment
## CORS:
- Cross Origin Resource Sharing(CORS) allows you to make requests from a web browser on one domain to a server on a different domain
- By default our API will only allow web browsers running on the same domain as our server to make requests to it
- an server can configure to only allow specfic CRUD method,  headers, and/or origins

## Deploy on a Ubantu Linux Server
To connext to a ubantu virtual machine (different for different providers):
```shell
ssh root@ip.address
```

To update packages, run:
```
sudo apt update && sudo apt upgrade -y
```

Install Python:
```
sudo apt install python
```

Install pip:
```
sudo apt install python3-pip
```

Install virtualenv:
```
sudo pip install virtualenv
```

Install postgres:
```
sudo apt install postgresql postgresql-contrib -y
```

When postgres is installed on Ubuntu it uses Peer Authentication and it uses the user that is currently logged into the ubuntu machine to log into the postgres 

Look at all the users that have been installed:
```
sudo cat /etc/passwd
```

Change into user postgres
```
su - postgres
```
# Docker

# Testing

# CI/CD pipeline