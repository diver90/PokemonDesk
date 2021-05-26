import React, {useEffect, useState} from 'react';
import PokemonCard from '../../components/PokemonCard';
import useData from "../../hooks/getData";
import {IPokemons, PokemonRequest} from "../../interface/pokemons";
import Heading from "../../components/Heading";
import useDebounce from "../../utils/useDebounce";

import s from './Pokedex.module.scss';


interface IQuery {
    name?: string,
    limit?:number
}

const PokedexPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [query, setQuery] = useState<IQuery>({
        limit: 12
    });

    const debouncedValue = useDebounce(searchValue, 500);

    const {
        data,
        isLoading,
        isError
    } = useData <IPokemons>(
        'getPokemons',
        query,
        [debouncedValue]
    );

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        setQuery((state: IQuery) => ({
            ...state,
                name: e.target.value
        }));
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Something went wrong!</div>;
    }

    return (
        <div className={s.root}>
            <div className={s.contextText}>
                <Heading level={1} >
                    <b>{!isLoading && data && data.total}</b> Pokemons for you to choose your favorite{' '}
                </Heading>
            </div>
            <div>
                <input type="text" value={searchValue} onChange={handleSearchChange}/>
            </div>
            <div className={s.pokemonCards}>
                {!isLoading && data && data.pokemons.map(({name, stats, types, img, id}: PokemonRequest) => {
                    return (
                        <PokemonCard key={id} name={name} attack={stats.attack} defense={stats.defense} types={types}
                                     img={img}/>
                    );
                })}
            </div>
        </div>
    );
};

export default PokedexPage;
