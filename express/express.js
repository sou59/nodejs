/* const express = require('express'),
os = require('os'),
app = express();
//extract PORT number
const port = (process.env.PORT || '3000');
//create route
app.get('/', (req, res, next) => {
let time = new Date();
console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
res.status(200).send(`Hello node with fwk express.js using app instance`);
});

//create server
let server = app.listen(port, os.hostname(), () => {
let host = server.address().address,
port = server.address().port;
console.log("Example app listening at http://%s:%s", host, port);
}); */

/*
http://localhost:3000/saygood
baseurl = 
http:// protocole
localhost : host
:3000 : port (par défaut port 80 qd rien écrit)
/quelquechose : endpoints ou api ou service rest
saygood : path
*/

/*  con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
 }); */
/* con.connect(function(err) {
    if (err) throw err;
    console.log("connected!");
    connection.query('SELECT * FROM user');

}); */
/* app.post('/person', function (req, res) {
    res.send('POST request to homepage');
  });
*/

const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const users = require('./router/users/router.js');
const cars = require('./router/cars/router.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// surtout ici juste après body parser
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
  });


app.use('/', users);
///app.use('/users/cars', users); // récupérer voitures d'un utilisteurs

app.use('/', cars);

//app.use(express.static('public'));

app.listen(3000, function (req, res) {
    console.log('Exemple app listening on port 3000')
});

/*
// afficher les users
app.get('/users', function (req, res) {
    const sql = "SELECT * FROM user";
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

// voir un user
app.get('/user/:id', function (req, res) {
    const sql2 = `select * from user where id=${req.params.id};`;
    con.query(sql2, function (err, result) {
        if (err) throw res.status(500).send("Cannot connect to database!");
        res.send(result);
    });
});

// put un user au format json
app.put('/user', function (req, res) {
    const sql = `insert into user(id, name, surname, age)
   VALUES('${req.body.id}', '${req.body.name}', '${req.body.surname}', '${req.body.age}')`;
    con.query(sql, function (err, result) {
        if (err) throw res.status(500).send("Cannot connect to database!");
        res.send({
            status: 'insertion ok'
        });
    });
});

// fonction delete
app.delete('/user/:id', function (req, res) {
    const sql3 = `DELETE FROM user where id=${req.params.id};`;
    con.query(sql3, function (err, result) {
        if (err) throw res.status(500).send("Cannot connect to database!");
        res.send({
            status: 'Record has been deleted !'
        });
    });
});

// update user in bdd
app.post('/user', function (req, res) {

    const upd = 
        `UPDATE user SET 
            name='${req.body.name}',
            surname='${req.body.surname}',
            age='${req.body.age}'
        WHERE id='${req.body.id}'`;

    con.query(upd, function (err, result) {
            if (err) throw res.status(500).send("Cannot connect to database!");
            res.send({
                status: 'update ok'
            });
    });
});
*/