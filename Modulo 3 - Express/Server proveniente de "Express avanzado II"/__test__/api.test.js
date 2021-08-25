const request = require('supertest');
const app = require('../app'); //importamos nuestra app
//Separamos el server de la app, para trabajarla por separado.

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

        expect(response.status).toBe(200)
        expect(response.body).not.toBeNull();
    })

    test('Should save a product', async () => {
        const response = await request(app)
            .post('/api/productos/guardar')
            .send(
                {
                    nombre: "Producto 02",
                    precio: 50000,
                    foto: "/url/ficticia/02"
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

    test('Get a nonexistent product with id = 3', async () => {
        const response = await request(app)
            .get('/api/productos/listar/3')

        expect(response.status).toBe(200);
        expect(response.body.error).not.toBeUndefined();
    })
})

describe('Update a specific producto /api/productos/actualizar/:id', () => {

    test('Update a producto with id =  1', async () => {
        const response = await request(app)
            .put('/api/productos/actualizar/1')
            .send({
                nombre: "Producto 01 modificado",
                precio: 40000,
                foto: "/url/ficticia/nro2"
            })

        expect(response.status).toBe(200);
        expect(response.body.id).toBe(1);

    })

    test('Update a nonexistent product with id =  3', async () => {
        const response = await request(app)
            .put('/api/productos/actualizar/3')
            .send({
                nombre: "Producto 03 modificado",
                precio: 40000,
                foto: "/url/ficticia/nro3"
            })

        expect(response.status).toBe(200);
        expect(response.body.id).toBeUndefined();
        expect(response.body.error).not.toBeUndefined();
    })
})

describe('Delete products /api/productos/borrar', () => {
    test('Delete a product with id = 1', async () => {
        const response = await request(app).delete('/api/productos/borrar/1');
        expect(response.status).toBe(200);
        expect(response.body.id).toBe(1);
    })

    test('Delete a nonexistent product with id = 3', async () => {
        const response = await request(app).delete('/api/productos/borrar/3');
        expect(response.status).toBe(200);
        expect(response.body.error).not.toBeUndefined();
    })
})

describe('Get all resultant products /api/productos/listar', () => {

    //Test utilizando supertest directamente, a modo de ejemplo. No hace falta el async await, ya que esto ya es una promise.
    test('Get all products with supertest only', (done) => {
        request(app)
            .get('/api/productos/listar')
            .expect(200, done)
    })

    test('Get all products, should be 1', async () => {
        const response = await request(app).get('/api/productos/listar')
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(1)
    })
})

//TODO al parecer para lanzar un error 500 hay que hacer un stub con Sinon (?) no netendí demasiado.