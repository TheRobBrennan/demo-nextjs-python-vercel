from datetime import datetime, UTC
import pytz
from api.config import settings


def get_current_time():
    now = datetime.now(UTC)
    local_tz = pytz.timezone(settings.TIMEZONE)
    local_time = now.astimezone(local_tz)

    return {
        "utc": now.isoformat(),
        "local": local_time.strftime("%Y-%m-%d %H:%M:%S %Z")
    }
