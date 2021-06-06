import { A } from 'hookrouter';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import { Ipokemons, PokemonsRequest } from '../../interface/pokemons';
import { LinkEnum } from '../../routers';
import { getPokemonTypes, getPokemonTypesLoading, getTypesAction } from '../../store/pokemon';
// import { LinkEnum } from '../../routers';
// import { SECOND_ROUTER } from '../../routers';
import s from './Pokedex.module.scss';

export interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const dispatch = useDispatch();
  const typesPokemons = useSelector(getPokemonTypes);
  const isTypingLoading = useSelector(getPokemonTypesLoading);

  const [searchValue, setSearchValue] = useState('');
  const [searchValue2, setSearchValue2] = useState('');
  const [searchValue3, setSearchValue3] = useState('');
  const [filtr, setFiltr] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  // const query = useMemo(() => ({
  //   name: searchValue
  // }), [searchValue]);

  const debouncedValue = useDebounce(searchValue, 500);
  const debouncedValue2 = useDebounce(searchValue2, 500);
  const debouncedValue3 = useDebounce(searchValue3, 500);

  const { data, isLoading, isError } = useData<Ipokemons>('getPokemons', query, [
    debouncedValue,
    debouncedValue2,
    debouncedValue3,
  ]);
  useEffect(() => {
    dispatch(getTypesAction());
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };
  const getValueOfFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFiltr(e.target.value);
    return filtr;
  };

  const handleSearchChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (filtr) {
      if (filtr.indexOf('attack') !== -1) {
        setSearchValue2(e.target.value);
      } else {
        setSearchValue3(e.target.value);
      }
      setQuery((state: IQuery) => ({
        ...state,
        limit: 100,
        [filtr]: e.target.value,
      }));
    } else {
      setQuery((state: IQuery) => ({
        ...state,
        limit: 100,
      }));
    }
  };

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
      <div>
        {isTypingLoading ? (
          <div> is Loading</div>
        ) : (
          typesPokemons?.map((item) => <div key={item.toString()}>{item}</div>)
        )}
      </div>
      <div className={s.inputs}>
        <select name="type" id="select_type">
          <option value="none" hidden>
            Tipo
          </option>
          <option value="23">Fire</option>
          <option value="2">Normal</option>
          <option value="3">Electric</option>
          <option value="4">Water</option>
        </select>
        <input type="text" value={searchValue2} onChange={handleSearchChange2} />
        <select name="type" id="select_type" onChange={getValueOfFilter}>
          <option value="none" hidden>
            Ataque
          </option>
          <option value="attack_from">Attack from</option>
          <option value="attack_to">Attack to</option>
        </select>
        <input type="text" value={searchValue3} onChange={handleSearchChange2} />
        <select name="type" id="select_type" onChange={getValueOfFilter}>
          <option value="none" hidden>
            Experiencia
          </option>
          <option value="exp_from">Experiencia from</option>
          <option value="exp_to">Experiencia to</option>
        </select>
      </div>

      <div className={s.pokemons}>
        {!isLoading &&
          data &&
          data.pokemons.map((item: PokemonsRequest) => {
            const { id, name, stats, types, img } = item;
            return (
              <A key={id} href={`${LinkEnum.POKEDEX}/${id}`}>
                <PokemonCard name={name} stats={stats} types={types} img={img} />
              </A>
            );
          })}
      </div>
    </Layout>
  );
};
export default PokedexPage;
