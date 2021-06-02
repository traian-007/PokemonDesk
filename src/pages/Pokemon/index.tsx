import React from 'react';
// import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import { PokemonsRequest } from '../../interface/pokemons';

export interface PokemonProps {
  id: string | number;
}
const PokemonPage = ({ id }: PokemonProps) => {
  const { data, isLoading } = useData<PokemonsRequest>('getPokemon', { id });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      this is id {data?.name}
      {/* <PokemonCard id={id} name={name_clean} stats={stats} types={types} img={img}/> */}
    </div>
  );
};
export default PokemonPage;
