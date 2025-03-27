import React from 'react';
import SessionCard from '../SessionCard/SessionCard';
import './SessionList.css';

const SessionList = ({ sessions, onDeleteSession }) => {
  return (
    <div className="session-list-container">
      {sessions.map(session => (
        <SessionCard 
          key={session.id} 
          session={session} 
          onDelete={onDeleteSession}
        />
      ))}
    </div>
  );
};

export default SessionList;