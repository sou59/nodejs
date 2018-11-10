const express = require('express'),
    router = express.Router();

const {con} = require('../../database');

// ajouter une voiture au format json
router.put('/cars', function (req, res) {
    const sql = `insert into cars(id, iduser, brand, model)
    VALUES('${req.body.id}', ${req.body.iduser}, '${req.body.brand}', '${req.body.model}')`;
    con.query(sql, function (err, result) {
        if (err) throw res.status(500).send("Cannot connect to database!");
        res.send({
            status: 'insertion cars ok'
        });
    });
});

// afficher toutes les users
router.get('/cars', function (req, res) {
    const sql = "SELECT * FROM cars";
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

// voir une voiture
router.get('/cars/:id', function (req, res) {
    const sql2 = `select * from cars where id=${req.params.id};`;
    con.query(sql2, function (err, result) {
        if (err) throw res.status(500).send("Cannot connect to database!");
        res.send(result);
    });
});

// fonction delete
router.delete('/cars/:id', function (req, res) {
    const sql3 = `DELETE FROM cars where id=${req.params.id};`;
    con.query(sql3, function (err, result) {
        if (err) throw res.status(500).send("Cannot connect to database!");
        res.send({
            status: 'car has been deleted !'
        });
    });
});

// update user in bdd
router.post('/cars', function (req, res) {
    const upd = 
        `UPDATE cars SET 
            iduser='${req.body.iduser}',
            brand='${req.body.brand}',
            model='${req.body.model}'
        WHERE id='${req.body.id}'`;

    con.query(upd, function (err, result) {
            if (err) throw res.status(500).send("Cannot connect to database!");
            res.send({
                status: 'update ok'
            });
    });
});


module.exports = router;
