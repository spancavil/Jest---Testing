const sum = require('../src/sum')

//No es obligatorio, pero es util para tener las pruebas organizadas en grupo el describe
describe('Pruebas para la suma', ()=> {

    //Acá va la suit de pruebas para la suma. Se puede poner "it" en lugar de test también
    test('1 + 3 es 4', () => {
        expect(sum(1,3)).toBe(4);
    })

    //Otro test
    test('1 + - 2 daría -1', ()=>{
        expect(sum(1,-2)).toBe(-1);
    })
})