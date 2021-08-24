const getData = require('../src/promises');

/* Aclaración:
Por default se trabaja con el entorno de Node que trabaja con promesas.
Si quisieramos trabajar con Jsdom dentro del package.JSON colocamos:
"test": "jest --env=jsdom"
*/

test('Me debería devolver data', () => {
    const API = 'https://api.mercadolibre.com/sites/MLA/search?q=sneakers&offset=50'; //Agarramos 50 sneakers

    //Como es una promise hay que poner return.
    return getData(API) //Axios me devuelve un objeto bastante importante. Hay que acceder a través de data
        .then(res =>
            expect(res.data.results).not.toBeNull()
            )
        .catch(error =>
            expect(error).toBeNull()
            )
})

test('Me debería retornar una response', () => {
    expect.assertions(1) //Le decimos que esperamos un solo resultado
    return getData('https://www.google.com') //Si colocamos una URL valida no devuelve ningún error y entra hacia el then
        .then (response => expect(response).not.toBeNull()) //Por eso no entra al bloque catch y falla la prueba y no se ejecuta ninguna assertion o afirmacion o test.
})

test('Me debería retornar un error, pero no lo hace', () => {
    expect.assertions(1) //Le decimos que esperamos un solo resultado
    return getData('https://www.google.com') //Si colocamos una URL valida no devuelve ningún error
        .catch (error => expect(error).not.toBeNull()) //Por eso no entra al bloque catch y falla la prueba y no se ejecuta ninguna assertion o afirmacion o test.
})