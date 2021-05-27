import React, {PropsWithChildren} from "react";
import HomePage from "./pages/HomePage";
import EmptyPage from "./pages/EmptyPage";
import PokedexPage from "./pages/PokedexPage";
import PokemonPage, {PokemonProps} from "./pages/PokemonPage";

export interface IGeneralMenu {
    title: string,
    link: LinkEnum,
    component: (props: PropsWithChildren<any>) => JSX.Element
}

export enum LinkEnum {
    HOME = '/',
    POKEDEX = '/pokedex',
    LEGENDARIES = '/legendaries',
    DOCUMENTATION = '/documentation',
    POKEMON = '/pokedex/:id'
}

export const GENERAL_MENU:IGeneralMenu[] = [
    {
        title: 'Home',
        link: LinkEnum.HOME,
        component: () => <HomePage/>
    },
    {
        title: 'Pokédex',
        link: LinkEnum.POKEDEX  ,
        component: () => <PokedexPage />

    },
    {
        title: 'Legendaries',
        link: LinkEnum.LEGENDARIES,
        component: () => <EmptyPage title="legendaries"/>

    },
    {
        title: 'Documentation',
        link: LinkEnum.DOCUMENTATION,
        component: () => <EmptyPage title="documentation"/>

    },
];

const SECOND_ROUTES: IGeneralMenu[] = [{
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: ({id}: PokemonProps) => <PokemonPage id={id} />
}];

export interface IAccMenu {
    [n: string]: (props: PropsWithChildren<any>) => JSX.Element
}

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc:IAccMenu, item:IGeneralMenu) => {
    acc[item.link] = item.component;
    return acc;
}, {});

export default routes;