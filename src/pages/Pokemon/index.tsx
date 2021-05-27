import React, { useEffect, useState } from 'react';
// import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import { Ipokemons } from '../../interface/pokemons';

export interface PokemonProps {
  id: string | number;
}

const PokemonPage = ({ id }: PokemonProps) => {
  const [query, setQuery] = useState({});

  useEffect(() => {
    setQuery((state) => ({
      ...state,
      id: id,
    }));
  }, []);
  useData<Ipokemons>('getPokemonsById', query);

  // console.log('dataaaa', data)
  // console.log(query)
  // console.log(id)
  // const [ id, name_clean, stats, types, img]  = data
  return (
    <div>
      this is id {id}
      {/* <PokemonCard id={id} name={name_clean} stats={stats} types={types} img={img}/> */}
    </div>
  );
};
export default PokemonPage;
