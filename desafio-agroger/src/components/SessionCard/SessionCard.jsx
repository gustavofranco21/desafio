import React from 'react';
import './SessionCard.css';
import { FiCalendar, FiClock, FiMapPin, FiTrash2 } from 'react-icons/fi';

const SessionCard = ({ session, onDelete }) => {
  return (
    <div className="session-card">
      <div className="session-header">
        <span className="session-id">#{session.id}</span>
        <h3 className="session-cooperative">{session.cooperative}</h3>
        <button 
          className="delete-button"
          onClick={() => onDelete(session.id)}
          aria-label="Excluir sessão"
        >
          <FiTrash2 />
        </button>
      </div>
      
      <div className="session-details">
        <div className="detail-item">
          <FiCalendar className="detail-icon" />
          <span>{session.date}</span>
        </div>
        
        <div className="detail-item">
          <FiClock className="detail-icon" />
          <span>{session.time}</span>
        </div>
        
        <div className="detail-item">
          <FiMapPin className="detail-icon" />
          <span>{session.location}</span>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;