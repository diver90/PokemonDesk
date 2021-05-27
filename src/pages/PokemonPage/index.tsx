import React from "react";

import s from './Pokemon.module.scss';

export interface PokemonProps  {
    id: string | number
}

const PokemonPage: React.FC<PokemonProps> = ({id}) => {
    return (
        <div className={s.root}>
            <div className={s.cardWrap}>
                <div className={s.cardImg}>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png" alt="img"/>
                </div>
                <div className={s.cardText}>
                    This is pokemon page {id}
                </div>
            </div>

        </div>
    );
};

export default PokemonPage;