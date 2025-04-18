# routes/metrics.py

import os
import requests
from flask import Blueprint, jsonify

metrics_bp = Blueprint('metrics', __name__)

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_API_KEY = os.getenv("SUPABASE_API_KEY")

@metrics_bp.route('/<int:server_id>', methods=['GET'])
def get_server_metrics(server_id):
    url = f"{SUPABASE_URL}/rest/v1/metrics?server_id=eq.{server_id}&order=timestamp.desc&limit=20"
    headers = {
        "apikey": SUPABASE_API_KEY,
        "Authorization": f"Bearer {SUPABASE_API_KEY}",
    }

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({"error": "Failed to fetch metrics"}), 500
