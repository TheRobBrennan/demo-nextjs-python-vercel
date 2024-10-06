from fastapi.testclient import TestClient
from api.index import app

client = TestClient(app)

def test_ping():
    response = client.get("/api/py/ping")
    assert response.status_code == 200
    data = response.json()
    assert "message" in data
    assert "timestamp" in data
    assert "localTimestamp" in data
    assert data["message"] == "Greetings, Earthling! Your ping has reached the cosmos."