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
        foo()
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
        foo()
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

## Auto Documentation:
FastAPI auto-generate documentation for api routes:
```
https://localhost:8000/docs
```

# Databases

# Python and Raw SQL

# ORMS

# Pydantic Models

# Authentication and Users

# SQL Relationships

# Vote/Like system

# Database Migration w/ Alembic

# Deployment

# Docker

# Testing

# CI/CD pipeline