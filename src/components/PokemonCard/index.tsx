import React from 'react';
import Button from '../Button';
import Heading from '../Heading';
import s from './PokemonCard.module.scss';

interface IPStats {
  attack: number;
  defense: number;
}

interface IPokemonsCard {
  name: string;
  img: string;
  types: string[];
  stats: IPStats;
  // id: number;
  // onClick: (id: number) => void
}

const PokemonCard = ({ name, stats, types, img }: IPokemonsCard) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size={24} className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <Button onClick={(e) => e} color="#73D677" width="74px" size="small">
            {types[0]}
          </Button>
          <Button onClick={(e) => e} color="#07D6F2" width="74px" size="small">
            {types[1] ? types[1] : types[0]}
          </Button>
          {/* <span className={s.label}>{types[0]}</span> */}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
