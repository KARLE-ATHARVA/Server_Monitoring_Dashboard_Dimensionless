from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)

    # Enable CORS for all domains on all routes
    CORS(app)

    # Import and register your blueprints here
    from .routes.metrics import metrics_bp
    from .routes.servers import servers_bp
    from .routes.alerts import alerts_bp

    app.register_blueprint(metrics_bp, url_prefix="/api/metrics")
    app.register_blueprint(servers_bp, url_prefix="/api/servers")
    app.register_blueprint(alerts_bp, url_prefix="/api/alerts")

    return app
