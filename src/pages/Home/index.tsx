import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Parallax from './components/Parallax';
import s from './Home.module.scss';

// interface ButtonProps {
//     onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
//     color: string
//     width: string
//     size: string
// }

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading size={72} className={s.title}>
            <b>Find</b> all your favorite <b>Pokemons</b>
          </Heading>
          <Heading size={16} className={s.describe}>
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </Heading>
          <Button onClick={(e) => e} color="#73D677" width="231px" size="big">
            See pokemons
          </Button>
          <Button onClick={(e) => e} color="#F2CB07" width="231px" size="big">
            Return
          </Button>
          <Button onClick={(e) => e} color="#73D677" width="74px" size="small">
            Grass
          </Button>
          <Button onClick={(e) => e} color="#07D6F2" width="74px" size="small">
            Poison
          </Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
        <Heading size={16} className={s.love}>
          Make with love <span>&#x2764;</span>
        </Heading>
      </Layout>
    </div>
  );
};
export default HomePage;