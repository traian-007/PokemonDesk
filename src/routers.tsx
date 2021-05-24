import React from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/Home/Empty';
import PokedexPage from './pages/Pokedex';

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}
interface IGeneralMenu {
  component: () => JSX.Element;
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
interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routers = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});
export default routers;
