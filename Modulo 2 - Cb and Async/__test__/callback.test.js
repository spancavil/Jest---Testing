const fetchAPI = require('../src/callBack')

it('Debería retornar una array con un length de 50', (done) => {
    const API = 'https://api.mercadolibre.com/sites/MLA/search?q=sneakers&offset=50'; //Agarramos 50 sneakers

    function callback(err, data) {
        try {
            
            resultados = data.results
            expect(err).toBeNull();
            expect(resultados).not.toBeNull();
            expect(resultados.length).toBe(50.01); //Encuentra un error y no sabe que hacer, porque no va por el camino del done(). Entonces por eso lo englobamos en un trycatch
            done()
        } catch (error) {

            done(error)
        }
    }

    fetchAPI(API, callback)
})