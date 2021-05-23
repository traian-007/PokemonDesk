import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import req from '../../utils/request';
import s from './Pokedex.module.scss';

interface IPokemon {
  name_clean: string;
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    'special-attack': number;
    'special-deffense': number;
    speed: number;
  };
  types: string[];
  img: string;
  name: string;
  id: number;
  height: number;
  weight: number;
  order: number;
}

interface IData {
  count: number;
  limit: number;
  offset: number;
  pokemons: IPokemon[];
  totalPokemons: number;
  total: number;
}

interface IStatePokemons {
  isLoading: boolean;
  isError: boolean;
  data: IData;
}
const usePokemons = (): IStatePokemons => {
  const [data, setData] = useState({} as IData);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        // const url = `${config.client.server.protocol}://${config.client.server.host}${config.client.endpoint.getPokemons.uri.pathname}`
        // const response = await fetch(url);
        // const result = await response.json();

        const result = await req('getPokemons');
        // console.log('asdfasdfasdfas', result)
        setData(result);
        console.log('result', result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);
  // console.log('data', data)
  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Somthing it's wrong!</div>;
  }
  return (
    <div className={s.root}>
      <Heading size={36} className={s.titleSearch}>
        {data.totalPokemons}
        <span> Pokemons </span>for You to choose your favorite
      </Heading>

      <div className={s.search}>
        <Heading size={16} className={s.placehold}>
          Encoeuntra tu pokemon ...
        </Heading>
      </div>
      <div className={s.pokemons}>
        {data.pokemons.map((item: IPokemon) => {
          const { id, name, stats, types, img } = item;
          return <PokemonCard key={id} name={name} stats={stats} types={types} img={img} />;
        })}
      </div>
    </div>
  );
};
export default PokedexPage;
