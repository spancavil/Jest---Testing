const carsList = require('../src/arreglos');

describe('Verificar los autos existentes', () => {
    
    test('Not null', () => {
        expect(carsList()).not.toBeNull();
    })

    test('Verificar si contiene Fiat Palio', ()=>{
        expect(carsList()).toContain('Fiat Palio')
    })

    test('Verificamos length del array', ()=>{
        expect(carsList()).toHaveLength(4)
    })
})