const request = require('supertest');
const app = require('../app'); //importamos el server donde está centralizada nuestra app
//Separamos el server de la app, para trabajarla por separado.

const { nanoid } = require('nanoid');

//Antes de todas las pruebas, arracamos la app
beforeAll(() => {
    testServer = app.listen(4000);
})

//Apagamos el server luego de todas las pruebas
afterAll(done => {
    testServer.close(done);
})

describe('Get all products from /api/productos', () => {
    test('Should return all productos', async () => {
        const response = await request(app).get('/api/productos/listar')

        expect(response.error).toBe(false);

        expect(response.status).toBe(200);

        console.log(response.body);

    })
})


describe('Save a product /api/productos', () => {
    test('Should save a product', async () => {
        const response = await request(app)
            .post('/api/productos/guardar')
            .send(
                {
                    nombre: "Producto 01",
                    precio: 30000,
                    foto: "/url/ficticia"
                }
            )
        console.log(response.body);

        expect(response.status).toBe(200)
        expect(response.body).not.toBeNull();
    })
})

//Una vez guardado un producto chequeamos la ruta
describe('Get a specific product /api/productos', () => {
    test('Get a product with id = 1', async () => {
        const response = await request(app)
            .get('/api/productos/listar/1')
        
        expect(response.status).toBe(200);
        expect(response.body.id).toBe(1);
    })
})