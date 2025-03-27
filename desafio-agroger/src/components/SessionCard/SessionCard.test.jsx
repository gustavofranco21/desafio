import React from 'react';
import { render, screen } from '@testing-library/react';
import SessionCard from './SessionCard';

describe('SessionCard', () => {
  const mockSession = {
    id: '11212',
    cooperative: 'Cooperativa vale do rio doce',
    date: '30/05/2023',
    time: '15:00',
    location: 'São Paulo'
  };

  it('renders session information correctly', () => {
    render(<SessionCard session={mockSession} />);
    
    expect(screen.getByText(`#${mockSession.id}`)).toBeInTheDocument();
    expect(screen.getByText(mockSession.cooperative)).toBeInTheDocument();
    expect(screen.getByText(mockSession.date)).toBeInTheDocument();
    expect(screen.getByText(mockSession.time)).toBeInTheDocument();
    expect(screen.getByText(mockSession.location)).toBeInTheDocument();
  });
});