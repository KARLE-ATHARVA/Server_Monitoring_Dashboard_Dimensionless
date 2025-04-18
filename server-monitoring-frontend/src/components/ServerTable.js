import React, { useEffect, useState } from 'react';
import './ServerTable.css';
import { fetchServers } from '../services/api'; 

const ServerTable = () => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    fetchServers()
      .then(data => setServers(data))
      .catch(err => console.error('Error fetching servers:', err));
  }, []);

  return (
    <div className="server-table-container">
      <h2>Active Instances</h2>
      <div className="server-table">
        <div className="table-header">
          <div>Name</div>
          <div>Status</div>
          <div>IP Address</div>
          <div>Location</div>
          <div>Created</div>
        </div>

        {servers.map((server) => (
          <div className="table-row" key={server.id}>
            <div>{server.name}</div>
            <div className={`status ${server.status.toLowerCase()}`}>{server.status}</div>
            <div>{server.ip_address}</div>
            <div>{server.location}</div>
            <div>{new Date(server.created_at).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerTable;
