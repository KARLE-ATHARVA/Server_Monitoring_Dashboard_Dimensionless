# routes/metrics.py

import os
import requests
from flask import Blueprint, jsonify

metrics_bp = Blueprint('metrics', __name__)

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_API_KEY = os.getenv("SUPABASE_API_KEY")

@metrics_bp.route("/", methods=["GET"])
def get_all_metrics():
    try:
        url = f"{SUPABASE_URL}/rest/v1/metric"
        headers = {
            "apikey": SUPABASE_API_KEY,
            "Authorization": f"Bearer {SUPABASE_API_KEY}",
        }
        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            return jsonify(response.json())
        else:
            return jsonify({
                "error": "Supabase responded with non-200",
                "status_code": response.status_code,
                "text": response.text
            }), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ✅ NEW ROUTE
@metrics_bp.route("/<int:server_id>", methods=["GET"])
def get_metrics_by_server(server_id):
    try:
        url = f"{SUPABASE_URL}/rest/v1/metric?server_id=eq.{server_id}&order=timestamp.desc&limit=10"
        headers = {
            "apikey": SUPABASE_API_KEY,
            "Authorization": f"Bearer {SUPABASE_API_KEY}",
        }
        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            return jsonify(response.json())
        else:
            return jsonify({
                "error": "Supabase responded with non-200",
                "status_code": response.status_code,
                "text": response.text
            }), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500
