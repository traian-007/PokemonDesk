import React, { PropsWithChildren } from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/Home/Empty';
import PokedexPage from './pages/Pokedex';
import PokemonPage, { PokemonProps } from './pages/Pokemon';

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}
interface IGeneralMenu {
  component: (props: PropsWithChildren<any>) => JSX.Element;
  title: string;
  link: LinkEnum;
}
export const GENERAL_MENU: IGeneralMenu[] = [
  {
    component: () => <HomePage />,
    title: 'Home',
    link: LinkEnum.HOME,
  },
  {
    component: () => <PokedexPage />,
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
  },
  {
    component: () => <EmptyPage title="Legendaries" />,
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
  },
  {
    component: () => <EmptyPage title="Documentation" />,
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
  },
];

export const SECOND_ROUTER: IGeneralMenu[] = [
  {
    component: ({ id }: PokemonProps) => <PokemonPage id={id} />,
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
  },
];

interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const routers = [...SECOND_ROUTER, ...GENERAL_MENU].reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});
export default routers;
