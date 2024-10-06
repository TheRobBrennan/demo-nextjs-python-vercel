from datetime import datetime
import pytz
from api.config import settings

def get_current_time():
    now = datetime.utcnow()
    local_tz = pytz.timezone(settings.TIMEZONE)
    local_time = now.replace(tzinfo=pytz.utc).astimezone(local_tz)
    
    return {
        "utc": now.isoformat(),
        "local": local_time.strftime("%Y-%m-%d %H:%M:%S %Z")
    }
