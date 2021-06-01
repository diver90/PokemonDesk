/**
 * @jest-environment jsdom
 */

import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import Heading from "./index";


describe('Heading',
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

        it('render', () => {
            act(()=>{
                render(<Heading level={2} />, container);
            });
            expect(container?.innerHTML).toBeDefined();
        });

        it('render with children', () => {
            act(()=>{
                render(<Heading level={2} >Child text</Heading>, container);
            });
            expect(container?.textContent).toBe('Child text');
        });

        it('render with props level', () => {
            act(()=>{
                render(<Heading level={3} >Child text</Heading>, container);
            });
            expect(container?.hasAttribute('h3')).not.toBeNull();
        });
    });