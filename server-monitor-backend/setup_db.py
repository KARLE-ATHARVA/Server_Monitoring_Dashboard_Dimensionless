from app import create_app, db
from app.utils.mock_data import seed_mock_data

app = create_app()
with app.app_context():
    db.drop_all()
    db.create_all()
    seed_mock_data()
