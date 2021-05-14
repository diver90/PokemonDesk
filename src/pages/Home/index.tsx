import React from 'react';
import Header from '../../components/Header';
import Button from "../../components/Button";
import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />

          <div >
            <h1>
                <b>Find</b> all your favorite <b>Pokemon</b>
            </h1>
              <p>You can choose</p>
              <Button onClick={()=>console.log('Click Button')}>
                  See Pokemons
              </Button>
          </div>
    </div>
  );
};

export default HomePage;
