from pydantic import BaseModel

class PingResponse(BaseModel):
    message: str
    timestamp: str
    localTimestamp: str