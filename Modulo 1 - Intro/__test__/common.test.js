//Practicamos los matchers

//toBeNull matches only null
//toBeUndefined matches only undef
//toBeDefined opposite al de arriba
//toBeTruthy matches un if que de true
//toBeFalsy lo contrario
//toBeGreaterThan();
//toBeGreaterThanOrEqual();
//toBeLessThan();
//toBeLessThanOrEqual()
//toBe() es lo mismo que toEqual()
//toBeCloseTo()
//toEqual()

test('2 + 2 = 4', () => {
    expect(2 + 2).toBe(4) //Es una suma dummy
})

test('Obj validation', ()=>{
    const data= {username: "spanno"}
    const data2={username: "spancavil"}

    expect(data).toBeDefined();
    expect(data2).toBeTruthy();
    expect(data).toEqual({username: "spanno"});
    expect(data).not.toEqual(data2) //esperamos que data no sea data2
});

test('Valor cero', ()=>{
    const z = 0;

    expect(z).not.toBeNull() //esperamos que z no sea nulo;
    expect(z).toBeFalsy() //Cero es un valor falsy;
})

test('Nro de coma flotante', ()=>{
    sumaFlotante = 0.1 + 0.2;

    expect(sumaFlotante).toBeCloseTo(0.3);
    //expect(sumaFlotante).toBe(0.3) Da error porque espera 0.30000000
})