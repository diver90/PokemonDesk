import React from "react";
import HomePage from "./pages/Home";
import EmptyPage from "./pages/EmptyPage";

interface IGeneralMenu {
    title: string,
    link: string,
    component: () => JSX.Element
}

export const GENERAL_MENU:IGeneralMenu[] = [
    {
        title: 'Home',
        link: '/',
        component: () => <HomePage/>
    },
    {
        title: 'Pokédex',
        link: '/pokedex',
        component: () => <EmptyPage title="pokedex"/>

    },
    {
        title: 'Legendaries',
        link: '/legendaries',
        component: () => <EmptyPage title="legendaries"/>

    },
    {
        title: 'Documentation',
        link: '/documentation',
        component: () => <EmptyPage title="documentation"/>

    },
];


interface IAccMenu {
    [n: string]: () => JSX.Element
}

const routes = GENERAL_MENU.reduce((acc:IAccMenu, item:IGeneralMenu) => {
    acc[item.link] = item.component;
    return acc;
}, {});

export default routes;