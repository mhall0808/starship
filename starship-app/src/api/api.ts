import axios from 'axios';

// Define the Starship interface
export interface Starship {
  id?: number; // Optional for new starships
  name: string;
  model: string;
  manufacturer: string;
  crew: string;
  passengers: string;
  starship_class: string;
}

export type StarshipCreate = Omit<Starship, 'id'>;
export type StarshipUpdate = Omit<Starship, 'id'>;

// Base URL for the API
const API_BASE_URL = 'http://localhost:5000/api/starships';

// Fetch all starships
export const getAllStarships = async (): Promise<Starship[]> => {
  const response = await axios.get<Starship[]>(API_BASE_URL);
  return response.data;
};

// Fetch a starship by ID
export const getStarshipById = async (id: number): Promise<Starship> => {
  const response = await axios.get<Starship>(`${API_BASE_URL}/${id}`);
  return response.data;
};

// Fetch a random starship
export const getRandomStarship = async (): Promise<Starship> => {
  const response = await axios.get<Starship>(`${API_BASE_URL}/random`);
  return response.data;
};

// Create a new starship
export const createStarshipApi = async (starship: StarshipCreate): Promise<Starship> => {
  const response = await axios.post<Starship>(API_BASE_URL, starship);
  return response.data;
};

// Update an existing starship
export const updateStarshipApi = async (id: number, starship: StarshipUpdate): Promise<void> => {
  await axios.put(`${API_BASE_URL}/${id}`, starship);
};

// Delete a starship
export const deleteStarshipApi = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};
