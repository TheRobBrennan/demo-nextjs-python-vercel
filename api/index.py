from fastapi import FastAPI
from datetime import datetime

### Create FastAPI instance with custom docs and openapi url
app = FastAPI(docs_url="/api/py/docs", openapi_url="/api/py/openapi.json")

@app.get("/api/py/helloFastApi")
def hello_fast_api():
    return {"message": "Hello from FastAPI"}

@app.get("/api/py/ping")
async def ping():
    return {
        "message": "Greetings, Earthling! Your ping has reached the cosmos.",
        "timestamp": datetime.utcnow().isoformat()
    }