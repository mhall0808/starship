// src/App.tsx

import React, { useState } from 'react';
import { Container, Spinner, Alert, Button } from 'react-bootstrap';
import './App.css'; // Custom styles for dark theme
import StarshipCard from './components/StarshipCard';
import StarshipModal from './components/StarshipModal';
import { useStarships } from './hooks/useStarships';
import { Starship, StarshipCreate, StarshipUpdate } from './api/api';

const App: React.FC = () => {
  const {
    starship,
    loading,
    error,
    fetchRandomStarship,
    createStarship,
    updateStarship,
    deleteStarship,
  } = useStarships();

  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);

  return (
    <Container fluid className="full-height-container text-white">
      <h1 className="my-4 text-center">Star Wars Starships</h1>
      {loading && <Spinner animation="border" variant="light" />}
      {error && <Alert variant="danger">{error}</Alert>}
      {starship ? (
        <>
          <StarshipCard starship={starship} onCardClick={fetchRandomStarship} />
          <div className="d-flex justify-content-center mb-4">
            <Button variant="primary" className="me-2" onClick={() => setShowUpdateModal(true)}>
              Update Starship
            </Button>
            <Button variant="danger" onClick={deleteStarship}>
              Delete Starship
            </Button>
          </div>
        </>
      ) : (
        !loading && (
          <Alert variant="info">
            No starship data available. Please create a new starship.
          </Alert>
        )
      )}
      <Button variant="success" onClick={() => setShowCreateModal(true)}>
        Create New Starship
      </Button>

      {/* Create Starship Modal */}
      <StarshipModal
        show={showCreateModal}
        onHide={() => setShowCreateModal(false)}
        onSubmit={createStarship}
        title="Create New Starship"
      />

      {/* Update Starship Modal */}
      {starship && (
        <StarshipModal
          show={showUpdateModal}
          onHide={() => setShowUpdateModal(false)}
          onSubmit={updateStarship}
          title="Update Starship"
          initialData={starship}
        />
      )}
    </Container>
  );
};

export default App;
