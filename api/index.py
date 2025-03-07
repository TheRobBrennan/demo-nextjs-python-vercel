from fastapi import FastAPI
from api.routes import ping
from api.config import settings


app = FastAPI(
    title=settings.PROJECT_NAME,
    docs_url="/api/py/docs",
    openapi_url="/api/py/openapi.json"
)

app.include_router(ping.router, prefix="/api/py", tags=["ping"])
