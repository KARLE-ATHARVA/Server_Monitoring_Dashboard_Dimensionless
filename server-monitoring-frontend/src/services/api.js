import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;


export const fetchAlerts = () => axios.get(`${BASE_URL}/api/alerts/`).then(res => res.data);

export const fetchServerMetrics = (id) =>
  axios.get(`${BASE_URL}/api/metrics/${id}`).then(res => res.data);

export const fetchServers = () =>
  axios.get(`${BASE_URL}/api/servers`).then(res => res.data);
