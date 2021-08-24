const app = require('./app')

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});

server.on('error', ()=>{
    console.log('Oops an error ocurred.');
})

