import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {prettyDOM, render} from '@testing-library/react';
import Character from './Character';

test ('Renders content', ()=>{
    const props = {
        photo : "lalalala",
        nombre: "Sebas",
        estado: "Vivo",
        especie: "Humano"
    }

    const component = render(<Character 
        estado ={props.estado}
        photo={props.photo}
        name = {props.nombre}
        especie = {props.especie}
        />)
    
    //Vemos el contenido del componente
    component.debug();

    //Obtenemos todos los h4 y los vemos por consola de forma más amigable utilizando prettyDOM
    const h4 = component.container.querySelectorAll('h4');
    for (const element of h4) {
        console.log(prettyDOM(element))
    }

    //Modo sencillo de buscar un texto
    component.getByText("Estado: Vivo");
    //Si pongo solo vivo me arroja error, porque busca TODO el textContent

    //Modo más pro para buscar si se renderiza la prop estado
    expect(component.container).toHaveTextContent(props.especie)
})