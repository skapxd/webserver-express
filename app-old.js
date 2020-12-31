const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'content-Type': 'application/json' });

        let salida = {

            nombre: 'manuel',
            edad: 21,
            url: req.url
        }

        // res.write('Hola Mundo');
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080)

console.log('Escuchando 8080');