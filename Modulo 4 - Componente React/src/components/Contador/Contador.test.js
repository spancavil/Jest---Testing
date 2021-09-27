import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {prettyDOM, render} from '@testing-library/react';
import Contador from './Contador';


describe("Test sobre el contador", ()=>{

    const component = render(<Contador/>)

    test("Should add 1 to counter", ()=>{
        component.getByText('+');
        component.debug()
    })
})