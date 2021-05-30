import React, {useState} from "react";
import {IQuery} from "../../interface/query";
import useData from "../../hooks/getData";
import {IPokemons, PokemonRequest} from "../../interface/pokemons";

import s from './Pokemon.module.scss';


export interface PokemonProps  {
    id: string | number
}

const PokemonPage: React.FC<PokemonProps> = ({id}) => {
    const query:IQuery = ({
        id: id
    });
    const {
        data,
        isLoading,
        isError
    } = useData <PokemonRequest>(
        'getPokemonById',
        query );
    console.log(data);
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