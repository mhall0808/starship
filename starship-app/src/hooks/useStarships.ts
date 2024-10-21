import { useState, useEffect } from 'react';
import {
  getRandomStarship,
  createStarshipApi,
  updateStarshipApi,
  deleteStarshipApi,
} from '../api/api';
import { Starship, StarshipCreate, StarshipUpdate } from '../api/api';

export const useStarships = () => {
  const [starship, setStarship] = useState<Starship | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch a random starship on mount
  useEffect(() => {
    fetchRandomStarship();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetch a random starship
  const fetchRandomStarship = async () => {
    try {
      setLoading(true);
      const response = await getRandomStarship();
      setStarship(response);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch starship data.');
    } finally {
      setLoading(false);
    }
  };

  // Create a new starship
  const createNewStarship = async (newStarship: StarshipCreate) => {
    try {
      setLoading(true);
      const createdStarship = await createStarshipApi(newStarship);
      setStarship(createdStarship);
    } catch (err) {
      console.error(err);
      setError('Failed to create starship.');
    } finally {
      setLoading(false);
    }
  };

  // Update an existing starship
  const updateCurrentStarship = async (updatedStarship: StarshipUpdate) => {
    if (starship?.id === undefined) {
      setError('Cannot update starship without an ID.');
      return;
    }
    try {
      setLoading(true);
      await updateStarshipApi(starship.id, updatedStarship);
      setStarship({ ...starship, ...updatedStarship });
    } catch (err) {
      console.error(err);
      setError('Failed to update starship.');
    } finally {
      setLoading(false);
    }
  };

  // Delete a starship and fetch another random one
  const deleteCurrentStarship = async () => {
    if (starship?.id === undefined) {
      setError('Cannot delete starship without an ID.');
      return;
    }
    try {
      setLoading(true);
      await deleteStarshipApi(starship.id);
      await fetchRandomStarship();
    } catch (err) {
      console.error(err);
      setError('Failed to delete starship.');
    } finally {
      setLoading(false);
    }
  };

  return {
    starship,
    loading,
    error,
    fetchRandomStarship,
    createStarship: createNewStarship,
    updateStarship: updateCurrentStarship,
    deleteStarship: deleteCurrentStarship,
  };
};
