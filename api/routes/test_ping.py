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
    assert data["message"] == "Greetings, Earthling! Your ping has reached the cosmos."

    # Test the timestamp formats
    current_time = get_current_time()
    assert datetime.fromisoformat(data["timestamp"]).strftime("%Y-%m-%dT%H:%M:%S") == \
           datetime.fromisoformat(current_time["utc"]).strftime("%Y-%m-%dT%H:%M:%S")
    assert data["localTimestamp"].startswith(current_time["local"].split()[0])  # Check date part

@patch('api.routes.ping.get_current_time')
def test_ping_error_handling(mock_get_current_time):
    mock_get_current_time.side_effect = Exception("Test error")
    
    response = client.get("/api/py/ping")
    assert response.status_code == 500
    data = response.json()
    assert "detail" in data
    assert data["detail"] == "Internal server error"