import React from 'react';
import Heading from "../Heading";
import cn from 'classnames';

import s from './PokemonCard.module.scss';

export interface stats {
    hp: number,
    attack: number,
    defense: number,
    speed: number,
    'special-attack': number,
    'special-defense': number,
}

export interface IPokemon {
    name: string,
    name_clean: string,
    abilities: string[],
    stats: stats,
    types: string[]
    img: string,
    base_experience: number,
    height: number,
    id: number,
    is_default: boolean,
    order: number,
    weight: number
}

export interface IPokemonCard {
    name: string,
    attack: number,
    defense: number,
    img: string,
    types: string[]
}

const PokemonCard: React.FC<IPokemonCard> = ({attack, defense, name, types, img}) => {
    return (
        <div className={s.root}>
            <div className={s.infoWrap}>
                <Heading level={4} className={s.titleName}>
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
                    {
                        types.map(type => {
                            return <span className={cn(s.label, s[type as keyof typeof s])}>{type}</span>
                        })
                    }
                </div>
            </div>
            <div className={cn(s.pictureWrap, s[types[0] as keyof typeof s])}>
                <img src={img}/>
            </div>
        </div>
    );
};

export default PokemonCard;