from pydantic import BaseSettings

# schema for environmental variables
class Settings(BaseSettings):
    database_hostname: str
    database_port: str
    database_password: str
    database_name: str
    database_username: str = "postgres"
    secret_key: str = "can be any string haha, my secret key will be RAMEN!"
    algorithm: str
    access_token_expire_minutes: int

    class Config:
        env_file = ".env"

settings = Settings()
print(settings)