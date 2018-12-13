const express = require('express'),
    router = express.Router();

const {con} = require('../../database')

// afficher les users
router.get('/users', function (req, res) {
    const sql = "SELECT * FROM user";
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

// voir un user
router.get('/user/:id', function (req, res) {
    const sql2 = `select * from user where id=${req.params.id};`;
    con.query(sql2, function (err, result) {
        if (err) throw res.status(500).send("Cannot connect to database!");
        res.send(result);
    });
});

// put un user au format json
router.put('/user', function (req, res) {
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
router.delete('/user/:id', function (req, res) {
    const sql3 = `DELETE FROM user where id=${req.params.id};`;
    con.query(sql3, function (err, result) {
        if (err) throw res.status(500).send("Cannot connect to database!");
        res.send({
            status: 'Record has been deleted !'
        });
    });
});

// update user in bdd
router.post('/user', function (req, res) {

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


// voir un user
 router.get('/users/cars2/:id', function (req, res) {
    const sql2 = `SELECT * FROM cars, user WHERE user.id=cars.iduser and  user.id=${req.params.id};`;
    con.query(sql2, function (err, result) {
        if (err) throw res.status(500).send("Cannot connect to database!");
        let rs = {
            name: "",
            surnma:"",
            cars:[]
        };
        let user = {

        }
        result.forEach(element => { 
            if(rs.name == "") Object.assign(rs, {name: element.name, surname: element.surname}) 
            rs.cars.push({ 
                model: element.model, 
                brand: element.brand 
        }); 
        
    });
        res.send(result);
    });
});

router.get('/users/cars/:id', function (req, res) {
    const sql2 = `SELECT * FROM cars WHERE iduser=${req.params.id};`;
    con.query(sql2, function (err, result) {
        if (err) throw res.status(500).send("Cannot connect to database!");
        res.send(result);
    });
});




module.exports = router; 
// toujours à la fin 



