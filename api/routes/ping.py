from fastapi import APIRouter, Depends
from api.models.ping import PingResponse
from api.services.time_service import get_current_time

router = APIRouter()

@router.get("/ping", response_model=PingResponse)
async def ping(current_time: dict = Depends(get_current_time)):
    return PingResponse(
        message="Greetings, Earthling! Your ping has reached the cosmos.",
        timestamp=current_time["utc"],
        localTimestamp=current_time["local"]
    )