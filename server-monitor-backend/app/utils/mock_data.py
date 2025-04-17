from app import db
from app.models import Server, Metric, Alert
import random
from datetime import datetime, timedelta

def seed_mock_data():
    servers = []
    for i in range(3):
        server = Server(
            name=f"Server-{i+1}",
            ip_address=f"192.168.1.{i+10}",
            status=random.choice(["Running", "Down"]),
            location="India"
        )
        db.session.add(server)
        servers.append(server)
    db.session.commit()

    for server in servers:
        for _ in range(20):
            metric = Metric(
                server_id=server.id,
                cpu=random.uniform(10, 90),
                ram=random.uniform(20, 90),
                disk=random.uniform(30, 100),
                network_in=random.uniform(100, 1000),
                timestamp=datetime.utcnow() - timedelta(minutes=_)
            )
            db.session.add(metric)

        for _ in range(5):
            alert = Alert(
                server_id=server.id,
                level=random.choice(["critical", "medium", "low"]),
                message=f"Mock alert for {server.name}",
                timestamp=datetime.utcnow() - timedelta(hours=_)
            )
            db.session.add(alert)

    db.session.commit()
    print(" Mock data seeded.")
