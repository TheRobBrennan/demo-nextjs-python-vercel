from fastapi import FastAPI
from datetime import datetime
import pytz

### Create FastAPI instance with custom docs and openapi url
app = FastAPI(docs_url="/api/py/docs", openapi_url="/api/py/openapi.json")

@app.get("/api/py/helloFastApi")
def hello_fast_api():
    return {"message": "Hello from FastAPI"}

@app.get("/api/py/ping")
async def ping():
    now = datetime.utcnow()
    local_tz = pytz.timezone('America/Los_Angeles')  # Change this to your desired timezone
    local_time = now.replace(tzinfo=pytz.utc).astimezone(local_tz)
    
    return {
        "message": "Greetings, Earthling! Your ping has reached the cosmos.",
        "timestamp": now.isoformat(),
        "localTimestamp": local_time.strftime("%Y-%m-%d %H:%M:%S %Z")  # Add this line
    }
