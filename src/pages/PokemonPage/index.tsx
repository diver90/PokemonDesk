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
        'getPokemon',
        query );

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    if (isError) {
        return (
            <div>Error!!!</div>
        )
    }
    return (
        <div className={s.root}>
            <div className={s.cardWrap}>
                <div className={s.cardImg}>
                    <img src={data?.img}/>
                </div>
                <div className={s.cardText}>
                    This is pokemon page {data?.name}
                </div>
            </div>

        </div>
    );
};

export default PokemonPage;