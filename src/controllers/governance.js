const express = require('express');
const bodyParser = require('body-parser');
//const req = require('express/lib/request'); // pq só governanca tem isso?
//const res = require('express/lib/response'); // pq ta cinza o res e o req?
const sqlite3 = require('sqlite3').verbose();

const dbPath = './database/yamaha.db';
const db = new sqlite3.Database(dbPath);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const getAllGovernance = (req, res) =>{ // qual o problema com esse req?
    const sql = 'SELECT * FROM Governanca';
    db.all(sql, [], (err, rows) =>{
        if(err){
            throw err;
        } else {
            res.json(rows);
        }
    });
}

const getGovernanceById = (req, res) =>{
    const { id } = req.params;
    const sql = `SELECT * FROM Governanca WHERE GovernancaID = ${id}`;
    db.get(sql, [], (err, row) =>{
        if(err){
            throw err;
        } else {
            res.json(row);
        }
    });
}

const createGovernance = (req, res) =>{
    const country = req.body.govpais;
    const state = req.body.govest;
    const address = req.body.govend;

    const sql = 'INSERT INTO Governanca (Pais, Estado, Endereco) VALUES (?, ?, ?)';
    db.run(sql, [country, state, address], (err) =>{
        if(err){
            throw err;
        }else{
            res.render('novaGovernanca');
        }
    });

}

const updateGovernance = (req, res) =>{
    const { id } = req.params; // pq esse id ta escuro?

    const country = req.body.Pais;
    const city = req.body.Cidade;
    const address = req.body.Endereco;

    const sql = `UPDATE Governanca SET Pais = ?, Cidade = ?, Endereco = ? WHERE GovernancaID = ${id}`
    db.run(sql, [country, city, address], (err) =>{
        if(err){
            throw err;
        } else {
            res.send('Governança atualizada com sucesso!');
        }
    });
}

const deleteGovernance = (req,res) => {
    const { id } = req.params;

    const sql = `DELETE FROM Governanca WHERE GovernancaID = ${id}`;
    db.run(sql, [], (err) => {
        if(err){
            throw err;
        }else{
            res.send('Governança deletada com sucesso!')
        }
    })
}

module.exports = {
    getAllGovernance,
    getGovernanceById,
    createGovernance,
    updateGovernance,
    deleteGovernance
}

