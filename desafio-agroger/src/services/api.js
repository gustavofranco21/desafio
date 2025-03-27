import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // API pública para testes
  timeout: 5000,
});

export const fetchSessions = async () => {
  try {
    // Simulando dados de sessões de café
    const response = await api.get('/posts?_limit=3');
    return response.data.map((post, index) => ({
      id: post.id,
      cooperative: `Cooperativa ${post.title.split(' ')[0]}`,
      date: new Date(Date.now() - index * 86400000).toLocaleDateString('pt-BR'),
      time: `${10 + index}:00`,
      location: ['São Paulo', 'Minas Gerais', 'Rio de Janeiro'][index],
    }));
  } catch (error) {
    console.error('Error fetching sessions:', error);
    throw error;
  }
};

export const createNewSession = async () => {
  try {
    // Simulando criação de nova sessão
    const response = await api.post('/posts', {
      title: 'Nova Sessão de Prova de Café',
      body: 'Detalhes da nova sessão',
      userId: 1,
    });
    return {
      id: response.data.id,
      cooperative: 'Nova Cooperativa',
      date: new Date().toLocaleDateString('pt-BR'),
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      location: 'Localização Nova',
    };
  } catch (error) {
    console.error('Error creating session:', error);
    throw error;
  }
};