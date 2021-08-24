const getData = require('../src/promises');

const API = 'https://api.mercadolibre.com/sites/MLA/search?q=sneakers&offset=50'; //Agarramos 50 sneakers

test('Probando retornar data con async await', async () => {
    const response = await getData(API);

    expect(response.data.results.length).toBe(50)
})

//LOL esta prueba siempre dará satisfactoria.
test('Probamos que realmente se ejecuta un expect, tanto en caso de URL valida como no válida', async () => {
    expect.assertions(1); 
    try {
        const response = await getData('aaaa');
        expect(response).not.toBeNull();
    } catch (error) {
        expect(error).not.toBeNull();
    }
})