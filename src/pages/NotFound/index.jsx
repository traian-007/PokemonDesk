import React from 'react';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routers';
import Button from '../../components/Button';
import TeamRocket from './assets/Team_Rocket.png';
import s from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.text}>404</div>
        <div className={s.layer}>
          <img src={TeamRocket} alt="Team Rocket" />
          <div className={s.subTitle}>
            <span>The rocket team</span> has won this time.
          </div>
          <Button color="#F2CB07" width="231px" size="big" onClick={() => navigate(LinkEnum.HOME)}>
            Return
          </Button>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
