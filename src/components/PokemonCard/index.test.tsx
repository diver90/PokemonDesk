/**
 * @jest-environment jsdom
 */

import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import PokemonCard from "./index";


describe('PokemonCard',
    () => {

        let container: Element | null;
        beforeEach(() => {
            container = document.createElement("div");
            document.body.appendChild(container);
        });

        afterEach(() => {
            if (container !== null) {
                unmountComponentAtNode(container);
                container.remove();
                container = null;
            }
        });

        const fakePokemon ={
            key: 5,
            name:'charmeleon',
            attack:64,
            defense:58,
            types: [
                "fire"
            ],
            img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png'
        };

        it('render', () => {
            act(()=>{
                render(<PokemonCard {...fakePokemon}/>, container);
            });
            expect(container?.innerHTML).toBeDefined();
        });

        it('render with image', () => {
            act(()=>{
                render(<PokemonCard {...fakePokemon}/>, container);
            });
            expect(container?.hasAttribute('img')).not.toBeNull();
        });

       it('render with heading', () => {
            act(()=>{
                render(<PokemonCard {...fakePokemon}/>, container);
            });
            expect(container?.hasAttribute('h4')).not.toBeNull();
        });
    });