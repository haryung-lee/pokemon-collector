import axios from 'axios';
import { useQuery } from 'react-query';

interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: any;
  forms: any;
  game_indices: any;
  held_items: any;
  location_area_encounters: string;
  moves: any;
  post_types: any;
  sprites: any;
  species: any;
  stats: any;
  types: any;
}

const getPokemonById = async (id: string): Promise<Pokemon> => {
  if (id === '') {
    throw new Error('id is required');
  }
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return data;
};

export const usePokemon = (id: string) => {
  return useQuery(['pokemon', id], () => getPokemonById(id));
};
