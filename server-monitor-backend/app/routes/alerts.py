# routes/alerts.py

import os
import requests
from flask import Blueprint, jsonify
from collections import Counter

alerts_bp = Blueprint('alerts', __name__)

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_API_KEY = os.getenv("SUPABASE_API_KEY")

@alerts_bp.route('/count', methods=['GET'])
def get_alert_counts():
    url = f"{SUPABASE_URL}/rest/v1/alerts"
    headers = {
        "apikey": SUPABASE_API_KEY,
        "Authorization": f"Bearer {SUPABASE_API_KEY}",
    }

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        data = response.json()
        counts = Counter(alert["level"] for alert in data)
        return jsonify(dict(counts)), 200
    else:
        return jsonify({"error": "Failed to fetch alerts"}), 500
