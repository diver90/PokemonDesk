import req from "../utils/request";
import config from "../config";
import {Dispatch} from "react";
import {ITypesRequest} from "../interface/pokemons";
import {IStateRequest} from "../interface";
import {IInitialState} from "./index";

export enum PokemonsActionTypes {
  FETCH_TYPES = 'FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT'
}

interface TypesAction {
  type: PokemonsActionTypes
  payload?: string[]
}

type ActionTypes = TypesAction;

export interface IPokemonsInitialState {
  types: IStateRequest<string>

}

const initialState: IPokemonsInitialState = {
    types: {
        isLoading: false,
        data: null,
        error: null,
    },
};

const pokemons = (state = initialState, action: ActionTypes ) => {
  switch (action.type) {
    case PokemonsActionTypes.FETCH_TYPES:
      return {
        ...state,
        types: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_RESOLVE:
      return {
        ...state,
        types: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_REJECT:
      return {
        ...state,
        types: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export const getPokemonsTypes = (state: IInitialState) => state.pokemons.types.data;
export const getPokemonsTypesLoading = (state: IInitialState) => state.pokemons.types.isLoading;

export const getTypesAction = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PokemonsActionTypes.FETCH_TYPES});
    try {
      const response = await req<ITypesRequest>('getTypes', {});
      console.log('###', response);
      dispatch({type: PokemonsActionTypes.FETCH_TYPES_RESOLVE, payload: response})
    }
    catch (e) {
      dispatch({ type: PokemonsActionTypes.FETCH_TYPES_REJECT, payload: e })
    }
  }
}

export default pokemons;