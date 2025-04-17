from flask import Blueprint, jsonify
from app.models import Alert
from app import db
from sqlalchemy import func

alerts_bp = Blueprint('alerts', __name__)

@alerts_bp.route('/count', methods=['GET'])
def get_alert_counts():
    counts = (
        db.session.query(Alert.level, func.count(Alert.id))
        .group_by(Alert.level)
        .all()
    )
    response = { level: count for level, count in counts }
    return jsonify(response), 200
