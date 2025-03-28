import React, { useState, useEffect } from 'react';
import './Home.css';
import SessionList from '../components/SessionList/SessionList';
import Button from '../components/Button/Button';
import Header from '../components/Header/Header'; 
import { FiLoader } from 'react-icons/fi'; 
import { fetchSessions, createNewSession } from '../services/api';

const Home = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sessionToDelete, setSessionToDelete] = useState(null);

  useEffect(() => {
    const loadSessions = async () => {
      try {
        const data = await fetchSessions();
        setSessions(data);
      } catch (err) {
        setError('Erro ao carregar sessões. Tente novamente mais tarde.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadSessions();
  }, []);

  const filteredSessions = sessions.filter(session =>
    session.cooperative.toLowerCase().includes(searchTerm.toLowerCase()) ||
    session.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNewSession = async () => {
    try {
      setLoading(true);
      const newSession = await createNewSession();
      setSessions([newSession, ...sessions]);
    } catch (err) {
      setError('Erro ao criar nova sessão.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSession = (sessionId) => {
    setSessionToDelete(sessionId);
  };

  const confirmDelete = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500)); 
      setSessions(sessions.filter(session => session.id !== sessionToDelete));
      setSessionToDelete(null);
    } catch (err) {
      setError('Erro ao excluir sessão.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="coffee-app-container">
      <Header onSearch={setSearchTerm} /> 
      
      <div className="app-content">
        {error && <div className="error-message">{error}</div>}
        
        <div className="sessions-container">
          <div className="section-header">
            <h2>Sessões Recentes</h2>
            <span className="badge">{filteredSessions.length} itens</span>
          </div>
          
          {loading ? (
            <div className="loading-container">
              <FiLoader className="spinner" />
              <p>Carregando sessões...</p>
            </div>
          ) : (
            <SessionList 
              sessions={filteredSessions} 
              onDeleteSession={handleDeleteSession}
            />
          )}
        </div>
        
        <div className="actions-container">
          <Button 
            onClick={handleNewSession}
            disabled={loading}
            fullWidth
          >
            {loading ? 'Processando...' : 'Nova sessão de prova'}
          </Button>
        </div>

        {sessionToDelete && (
          <div className="modal-overlay">
            <div className="confirmation-modal">
              <h3>Confirmar Exclusão</h3>
              <p>Tem certeza que deseja excluir esta sessão?</p>
              <div className="modal-actions">
                <Button onClick={() => setSessionToDelete(null)}>Cancelar</Button>
                <Button onClick={confirmDelete} variant="danger">Excluir</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;