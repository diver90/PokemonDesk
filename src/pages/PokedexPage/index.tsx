import React, {useMemo, useState} from 'react';
import PokemonCard from '../../components/PokemonCard';
import useData from "../../hooks/getData";

import s from './Pokedex.module.scss';

const PokedexPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [query, setQuery] = useState([]);

    const {
        data,
        isLoading,
        isError
    } = useData <IPokemons>(
        'getPokemons',
        query,
        [searchValue]
    );
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        setQuery((s) => ({
            ...s,
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
                <p>
                    <b>{data?.total}</b> Pokemons for you to choose your favorite{' '}
                </p>
            </div>
            <div>
                <input type="text" value={searchValue} onChange={handleSearchChange}/>
            </div>
            <div className={s.pokemonCards}>
                {data?.pokemons?.map(({name, stats, types, img, id}) => {
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
