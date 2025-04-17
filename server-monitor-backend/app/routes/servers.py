from flask import Blueprint, jsonify
from app.models import Server

servers_bp = Blueprint('servers', __name__)

@servers_bp.route('/', methods=['GET'])
def get_servers():
    servers = Server.query.all()
    response = [
        {
            "id": s.id,
            "name": s.name,
            "ip_address": s.ip_address,
            "status": s.status,
            "location": s.location,
            "created_at": s.created_at.isoformat()
        }
        for s in servers
    ]
    return jsonify(response), 200
