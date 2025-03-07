from api.services.time_service import get_current_time
from datetime import datetime, UTC
import pytz
from api.config import settings


def test_get_current_time():
    result = get_current_time()
    assert "utc" in result
    assert "local" in result

    # Check UTC time format
    utc_time = datetime.fromisoformat(result["utc"])
    assert utc_time.tzinfo is not None, "UTC time should be timezone-aware"
    assert utc_time.tzinfo.utcoffset(utc_time) == UTC.utcoffset(None)

    # Check local time format
    local_time_str, timezone_str = result["local"].rsplit(" ", 1)
    local_time = datetime.strptime(local_time_str, "%Y-%m-%d %H:%M:%S")

    # Check if the timezone string is correct for the configured timezone
    local_tz = pytz.timezone(settings.TIMEZONE)
    current_time = datetime.now(local_tz)
    expected_tz = current_time.strftime("%Z")
    msg = f"Expected: {expected_tz}, got: {timezone_str}"
    assert timezone_str == expected_tz, msg

    # Check if the local time is different from UTC (assuming non-UTC timezone)
    if settings.TIMEZONE != "UTC":
        assert local_time != utc_time.replace(tzinfo=None), (
            "Local time should be different from UTC for non-UTC timezone"
        )
