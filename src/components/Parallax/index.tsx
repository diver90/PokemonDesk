import React, {useState, useEffect} from 'react';

import style from "./Parallax.module.scss";

import SmallPokeBallPng from './assets/PokeBall1.png';
import CloudPng from './assets/Cloud1.png';
import PokeBallPng from './assets/PokeBall2.png';
import CloudBigPng from './assets/Cloud2.png';
import PikachuPng from './assets/Pikachu.png';


const Parallax = () => {
    const [screenX, setScreenX] = useState(0);
    const [screenY, setScreenY] = useState(0);
    const handleMouseMove = (event: MouseEvent) => {
        setScreenX(event.screenX);
        setScreenY(event.screenY);
    };
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            removeEventListener('mousemove', handleMouseMove)
        }
    }, [screenX, screenY]);
    return (
        <div className={style.root}>
            <div className={style.smallPokeBall} style={{
                transform: `translate(${screenY * 0.02}px, ${screenX * 0.05}px)`
            }}>
                <img src={SmallPokeBallPng} alt="Small PokeBall"/>
            </div>
            <div className={style.cloud}
                 style={{
                     transform: `translate(${screenY * 0.01}px, ${screenX * 0.03}px)`
                 }}>
                <img src={CloudPng} alt="Cloud PokeBall"/>
            </div>
            <div className={style.cloudBig}
                 style={{
                     transform: `translate(${screenY * 0.01}px, ${screenX * 0.04}px)`
                 }}>
                <img src={CloudBigPng} alt="Cloud Big PokeBall"/>
            </div>
            <div className={style.pokeBall}
                 style={{
                     transform: `translate(${screenY * 0.03}px, ${screenX * 0.03}px)`
                 }}>
                <img src={PokeBallPng} alt="Big PokeBall"/>
            </div>
            <div
                className={style.pikachu}
                style={{
                    transform: `translate(${screenY * 0.02}px, ${screenX * 0.01}px)`
                }}>
                <img src={PikachuPng} alt="Cloud PokeBall"/>
            </div>
        </div>
    );
};

export default Parallax;