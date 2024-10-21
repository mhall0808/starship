// src/components/StarshipModal.tsx

import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Starship, StarshipCreate, StarshipUpdate } from '../api/api';

interface StarshipModalProps {
  show: boolean;
  onHide: () => void;
  onSubmit: (starship: StarshipCreate | StarshipUpdate) => void;
  title: string;
  initialData?: Starship;
}

const StarshipModal: React.FC<StarshipModalProps> = ({
  show,
  onHide,
  onSubmit,
  title,
  initialData,
}) => {
  const [formData, setFormData] = useState<StarshipCreate>({
    name: '',
    model: '',
    manufacturer: '',
    crew: '',
    passengers: '',
    starship_class: '',
  });

  useEffect(() => {
    if (initialData) {
      const { id, ...rest } = initialData;
      setFormData(rest as StarshipCreate);
    } else {
      setFormData({
        name: '',
        model: '',
        manufacturer: '',
        crew: '',
        passengers: '',
        starship_class: '',
      });
    }
  }, [initialData, show]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formStarshipName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter starship name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formStarshipModel" className="mt-3">
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter starship model"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formStarshipManufacturer" className="mt-3">
            <Form.Label>Manufacturer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter starship manufacturer"
              name="manufacturer"
              value={formData.manufacturer}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formStarshipCrew" className="mt-3">
            <Form.Label>Crew</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter crew capacity"
              name="crew"
              value={formData.crew}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formStarshipPassengers" className="mt-3">
            <Form.Label>Passengers</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter passengers capacity"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formStarshipClass" className="mt-3">
            <Form.Label>Starship Class</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter starship class"
              name="starship_class"
              value={formData.starship_class}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StarshipModal;
