describe('Email validation', () => {

    test('Cadena que sea un email', () => {
        const email = "spancavil@live.com";

        expect(email).toMatch(/\S+@\S+\.\S+/)
    })

    test('Cadena que no es un mail', ()=>{
        const notEmail = "spancavillive.com";
        
        expect(notEmail).not.toMatch(/\S+@\S+\.\S+/)
    })
})