from fastapi.testclient import TestClient
from api.index import app
from api.services.time_service import get_current_time
from datetime import datetime
from unittest.mock import patch


client = TestClient(app)


def test_ping():
    response = client.get("/api/py/ping")
    assert response.status_code == 200
    data = response.json()
    assert "message" in data
    assert "timestamp" in data
    assert "localTimestamp" in data
    expected_msg = (
        "Greetings, Earthling! Your ping has reached the cosmos."
    )
    assert data["message"] == expected_msg

    # Test the timestamp formats
    current_time = get_current_time()
    utc_format = "%Y-%m-%dT%H:%M:%S"
    response_time = (
        datetime.fromisoformat(data["timestamp"]).strftime(utc_format)
    )
    current_utc = (
        datetime.fromisoformat(current_time["utc"]).strftime(utc_format)
    )
    assert response_time == current_utc

    # Check date part of local timestamp
    local_date = current_time["local"].split()[0]
    assert data["localTimestamp"].startswith(local_date)


@patch('api.routes.ping.get_current_time')
def test_ping_error_handling(mock_get_current_time):
    mock_get_current_time.side_effect = Exception("Test error")

    response = client.get("/api/py/ping")
    assert response.status_code == 500
    data = response.json()
    assert "detail" in data
    assert data["detail"] == "Internal server error"
