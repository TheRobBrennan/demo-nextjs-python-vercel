from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str = "Landsat Reflectance Data API"
    TIMEZONE: str = "America/Los_Angeles"


settings = Settings()
