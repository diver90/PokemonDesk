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

const useData = <T>(endpoint: string, query: object, deps: any[] = []) => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        
        const getData = async (): Promise<void> => {

            setLoading(true);
            try {
                const result = await req<T>(endpoint, query);
                setData(result);
            } catch (e) {
                setIsError(true);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, deps);
    return {
        data,
        isLoading,
        isError,
    };
};

export default useData;