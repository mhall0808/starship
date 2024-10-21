import React from 'react';
import { Card } from 'react-bootstrap';
import { Starship } from '../api/api';

interface StarshipCardProps {
  starship: Starship;
  onCardClick: () => void;
}

const StarshipCard: React.FC<StarshipCardProps> = ({ starship, onCardClick }) => {
  return (
    <Card
      className="text-center mx-auto my-4"
      style={{
        maxWidth: '24rem',
        cursor: 'pointer',
        backgroundColor: '#1c1c1e',
        borderColor: '#333',
      }}
      onClick={onCardClick}
    >
      <Card.Body>
        <i
          className="bi bi-rocket-takeoff-fill"
          style={{ fontSize: '4rem', color: '#ffdd57' }}
        ></i>
        <Card.Title className="mt-3" style={{ color: '#ffffff' }}>
          {starship.name}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          ID: {starship.id} | Class: {starship.starship_class}
        </Card.Subtitle>
        <Card.Text style={{ color: '#d1d1d1' }}>
          <strong>Model:</strong> {starship.model} <br />
          <strong>Manufacturer:</strong> {starship.manufacturer} <br />
          <strong>Crew:</strong> {starship.crew} <br />
          <strong>Passengers:</strong> {starship.passengers}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StarshipCard;
