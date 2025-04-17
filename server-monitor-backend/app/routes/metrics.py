from flask import Blueprint, jsonify
from app.models import Metric

metrics_bp = Blueprint('metrics', __name__)

@metrics_bp.route('/<int:server_id>', methods=['GET'])
def get_server_metrics(server_id):
    metrics = (
        Metric.query.filter_by(server_id=server_id)
        .order_by(Metric.timestamp.desc())
        .limit(20)
        .all()
    )
    response = [
        {
            "cpu": m.cpu,
            "ram": m.ram,
            "disk": m.disk,
            "network_in": m.network_in,
            "timestamp": m.timestamp.isoformat()
        }
        for m in metrics
    ]
    return jsonify(response), 200
