from api.services.time_service import get_current_time
from datetime import datetime
import pytz
from api.config import settings

def test_get_current_time():
    result = get_current_time()
    assert "utc" in result
    assert "local" in result
    
    # Check UTC time format
    utc_time = datetime.fromisoformat(result["utc"])
    assert utc_time.tzinfo is None or utc_time.tzinfo.utcoffset(utc_time) is None
    
    # Check local time format
    local_time_str, timezone_str = result["local"].rsplit(" ", 1)
    local_time = datetime.strptime(local_time_str, "%Y-%m-%d %H:%M:%S")
    
    # Check if the timezone string is correct for the configured timezone
    local_tz = pytz.timezone(settings.TIMEZONE)
    current_time = datetime.now(local_tz)
    assert timezone_str == current_time.strftime("%Z"), f"Expected timezone: {current_time.strftime('%Z')}, got: {timezone_str}"
    
    # Check if the local time is different from UTC (assuming it should be)
    assert local_time != utc_time, "Local time should be different from UTC"