const http = require("http"); // import module qui implante le protocole http


http.createServer((request, response) => {

    // SEND yhe HTTP header
    // HTTP Status: 200 : OK
    //Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // header avec le status de réponse , contenu = texte

    response.end('Hello World\n');
    // envoi du contenu

}).listen(3000);
// écoute sur le port 3000