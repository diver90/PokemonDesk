import React from 'react';
import Heading from "../Heading";

import s from './PokemonCard.module.scss';

interface IPokemon {
    attack: number,
    defense: number,
    name: string,
    name_clean: string,
    abilities: [],
    stats:[],
    types:[]
    img:string,
    base_experience: number,
    height:number,
    id:number,
    is_default: boolean,
    order:number,
    weight: number

}

const PokemonCard: React.FC<IPokemon> = ({attack, defense, name}) => {
    return (
        <div className={s.root}>
            <div className={s.infoWrap}>
                <Heading level={6} className={s.titleName}>
                    {name}
                </Heading>
                <div className={s.statWrap}>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            {attack}
                        </div>
                        Attack
                    </div>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            {defense}
                        </div>
                        Defense
                    </div>
                </div>
                <div className={s.labelWrap}>
                    <span className={s.label}>Fire</span>
                </div>
            </div>
            <div className={s.pictureWrap}>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" alt="Charmander" />
            </div>
        </div>
    );
};

export default PokemonCard;