const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const dbPath = './database/yamaha.db';
const db = new sqlite3.Database(dbPath);
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const getAllEmployees = (req, res) =>{
    const sql = 'SELECT * FROM Funcionarios';
    db.all(sql, [], (err, rows) =>{
        if(err){
            throw err;
        } else {
            res.json(rows);
        }
    });
}

const getEmployeeById = (req, res) =>{
    const { id } = req.params;
    const sql = `SELECT * FROM Funcionarios WHERE FuncionarioID = ${id}`;
    db.get(sql, [], (err, row) =>{
        if(err){
            throw err;
        } else {
            res.json(row);
        }
    });
}

const createEmployee = (req, res) =>{
    const firstName = req.body.Nome;
    const lastName = req.body.Sobrenome;
    const employeeYamaha = req.body.FuncionarioYamaha;
    const register = req.body.Registro;
    const city = req.body.Cidade;
    const hoursProject = req.body.HorasProjetos;
    const position = req.body.Cargo;

    const sql = 'INSERT INTO Funcionarios (Nome, Sobrenome, FuncionarioYamaha, Registro, Cidade, HorasProjetos, Cargo) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.run(sql, [firstName, lastName, employeeYamaha, register, city, hoursProject, position], (err) =>{
        if(err){
            throw err;
        } else {
            res.send('Funcionário cadastrado com sucesso!');
        }
    });
}

const updateEmployee = (req, res) =>{
    const { id } = req.params;

    const firstName = req.body.Nome;
    const lastName = req.body.Sobrenome;
    const employeeYamaha = req.body.FuncionarioYamaha;
    const register = req.body.Registro;
    const city = req.body.Cidade;
    const hoursProject = req.body.HorasProjetos;
    const position = req.body.Cargo;

    const sql = `UPDATE Funcionarios SET Nome = ?, Sobrenome = ?, FuncionarioYamaha = ?, Registro = ?, Cidade = ?, HorasProjetos = ?, Cargo = ? WHERE FuncionarioID = ${id}`;
    db.run(sql, [firstName, lastName, employeeYamaha, register, city, hoursProject, position], (err) =>{
        if(err){
            throw err;
        } else {
            res.send('Funcionário atualizado com sucesso!');
        }
    });
}

const deleteEmployee = (req, res) =>{
    const { id } = req.params;

    const sql = `DELETE FROM Funcionarios WHERE FuncionarioID = ${id}`;
    db.run(sql, [], (err) =>{
        if(err){
            throw err;
        } else {
            res.send('Funcionário deletado com sucesso!');
        }
    });
}

module.exports = {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
}