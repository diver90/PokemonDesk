import {useEffect, useState} from "react";
import req from "../utils/request";
import {IPokemon} from "../components/PokemonCard";


export interface IPokemons extends Array<IPokemon> {
    [index: number]: IPokemon;
}

interface IData {
    total: number;
    count: number;
    offset: number;
    limit: number;
    pokemons: IPokemons;
}

const useData = (endpoint: string, query: object) => {
    const [data, setData] = useState<IData | null>(null);
    const [isLoading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    console.log(`Working`);

    useEffect(() => {
        console.log(`Working2`);
        const getData = async () => {

            setLoading(true);
            try {
                const result = await req(endpoint, query);
                setData(result);
            } catch (e) {
                setIsError(true);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [query]);
    return {
        data,
        isLoading,
        isError,
    };
};

export default useData;