from fastapi import APIRouter, HTTPException
from api.models.ping import PingResponse
from api.services.time_service import get_current_time


router = APIRouter()


@router.get("/ping", response_model=PingResponse)
async def ping():
    try:
        current_time = get_current_time()
        return PingResponse(
            message="Greetings, Earthling! Your ping has reached the cosmos.",
            timestamp=current_time["utc"],
            localTimestamp=current_time["local"]
        )
    except Exception:
        raise HTTPException(status_code=500, detail="Internal server error")
