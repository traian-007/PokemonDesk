import { A } from 'hookrouter';
import React, { useState } from 'react';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import { Ipokemons, PokemonsRequest } from '../../interface/pokemons';
import { LinkEnum } from '../../routers';
// import { LinkEnum } from '../../routers';
// import { SECOND_ROUTER } from '../../routers';
import s from './Pokedex.module.scss';

export interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  // const query = useMemo(() => ({
  //   name: searchValue
  // }), [searchValue]);

  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<Ipokemons>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };
  // const ab = (id: number) => {
  //   setQuery((state: IQuery) => ({
  //     ...state,
  //     name: '6'
  //   }))
  //   console.log()
  // }

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  if (isError) {
    return <div>Somthing it's wrong!</div>;
  }

  return (
    <Layout className={s.root}>
      <Heading size="h3" className={s.titleSearch}>
        {!isLoading && data && data.total}
        <span> Pokemons </span>for You to choose your favorite
      </Heading>

      <div className={s.search}>
        <input className={s.placehold} type="text" value={searchValue} onChange={handleSearchChange} />
      </div>
      <div className={s.pokemons}>
        {!isLoading &&
          data &&
          data.pokemons.map((item: PokemonsRequest) => {
            const { id, name, stats, types, img } = item;
            return (
              <A key={id} href={`${LinkEnum.POKEDEX}/${id}`}>
                <PokemonCard name={name} stats={stats} types={types} img={img} />;
              </A>
            );
          })}
      </div>
    </Layout>
  );
};
export default PokedexPage;
