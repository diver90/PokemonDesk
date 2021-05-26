import React, { useEffect, useState } from 'react';
import PokemonCard, { IPokemon } from '../../components/PokemonCard';
import req from '../../utils/request';

import s from './Pokedex.module.scss';

interface IPokemons extends Array<IPokemon> {
  [index: number]: IPokemon;
}

interface IData {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: IPokemons;
}

const usePokemons = () => {
  const [data, setData] = useState<IData>({} as IData);
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      console.log(`Working`);

      setLoading(true);
      try {
        const result = await req('getPokemons');
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }
    getPokemons();
  }, []);
  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();
  const pokemons: IPokemons = data.pokemons;
  const totalPokemons: number = data.total;

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
          <b>{totalPokemons}</b> Pokemons for you to choose your favorite{' '}
        </p>
      </div>
      <div className={s.pokemonCards}>
        {pokemons.map(({ name, stats, types, img, id }) => {
          return (
            <PokemonCard key={id} name={name} attack={stats.attack} defense={stats.defense} types={types} img={img} />
          );
        })}
      </div>
    </div>
  );
};

export default PokedexPage;
