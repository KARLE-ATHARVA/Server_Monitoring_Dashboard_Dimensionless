from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import Config

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    CORS(app)

    from .routes.alerts import alerts_bp
    from .routes.metrics import metrics_bp
    from .routes.servers import servers_bp

    app.register_blueprint(alerts_bp, url_prefix='/api/alerts')
    app.register_blueprint(metrics_bp, url_prefix='/api/metrics')
    app.register_blueprint(servers_bp, url_prefix='/api/servers')

    return app
