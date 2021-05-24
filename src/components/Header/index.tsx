import React from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';
import { GENERAL_MENU } from '../../routers';
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';
import s from './Header.module.scss';

const Header = () => {
  const path = usePath();
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={s.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A
              key={title}
              href={link}
              className={cn(s.menuLink, {
                [s.activeLin]: link === path,
              })}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
