import React from 'react';

import style from "./style.module.scss";

import SmallPokeBallPng from './assets/PokeBall1.png';
import CloudPng from './assets/Cloud1.png';
import PokeBallPng from './assets/PokeBall2.png';
import CloudBigPng from './assets/Cloud2.png';
import PikachuPng from './assets/Pikachu.png';


const Parallax = () => {
    return (
        <div className={style.root}>
            <div className={style.smallPokeBall}>
                <img src={SmallPokeBallPng} alt="Small PokeBall" />
            </div>
            <div className={style.cloud}>
                <img src={CloudPng} alt="Cloud PokeBall" />
            </div>
            <div className={style.cloudBig}>
                <img src={CloudBigPng} alt="Cloud Big PokeBall" />
            </div>
            <div className={style.pokeBall}>
                <img src={PokeBallPng} alt="Big PokeBall" />
            </div>
            <div className={style.pikachu}>
                <img src={PikachuPng} alt="Cloud PokeBall" />
            </div>
        </div>
    );
};

export default Parallax;