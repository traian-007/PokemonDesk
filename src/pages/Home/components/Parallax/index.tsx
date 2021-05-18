import React, { useEffect, useState } from 'react';
import SmallPokeBallPng from './assets/PokeBall1.png';
import PokeBallPng from './assets/Pokeball2.png';
import CloudBigPng from './assets/CloudBig.png';
import CloudPng from './assets/CloudSmall.png';
import PikachuPng from './assets/Pikachu.png';

import s from './Parallax.module.scss';

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [screenX, screenY]);
  return (
    <div className={s.root}>
      <div
        className={s.smallPokeBall}
        style={{
          transform: `translate(${screenY * 0.01}px, ${screenX * 0.05}px)`,
        }}>
        <img src={SmallPokeBallPng} alt="Small Pokeball" />
      </div>
      <div
        className={s.cloud}
        style={{
          transform: `translate(${screenY * 0.04}px, ${screenX * 0.02}px)`,
        }}>
        <img src={CloudPng} alt="Cloud Pokeball" />
      </div>
      <div
        className={s.cloudBig}
        style={{
          transform: `translate(${screenY * 0.01}px, ${screenX * 0.03}px)`,
        }}>
        <img src={CloudBigPng} alt="Cloud Big Pokeball" />
      </div>
      <div
        className={s.pokeBall}
        style={{
          transform: `translate(${screenY * 0.05}px, ${screenX * 0.05}px)`,
        }}>
        <img src={PokeBallPng} alt="Pokeball" />
      </div>
      <div
        className={s.pikachu}
        style={{
          transform: `translate(${screenY * 0.01}px, ${screenX * 0.01}px)`,
        }}>
        <img src={PikachuPng} alt="Pikachu Pokeball" />
      </div>
    </div>
  );
};

export default Parallax;
