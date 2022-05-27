const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const dbPath = './database/yamaha.db';
const db = new sqlite3.Database(dbPath);
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const getAllProjects = (req, res) =>{
    const sql = 'SELECT * FROM Projetos';
    db.all(sql, [], (err, rows) =>{
        if(err){
            throw err;
        } else {
            res.json(rows);
        }
    });
}

const getProjectById = (req, res) =>{
    const { id } = req.params;
    const sql = `SELECT * FROM Projetos WHERE ProjetoID = ${id}`;
    db.get(sql, [], (err, row) =>{
        if(err){
            throw err;
        } else {
            res.json(row);
        }
    });
}

const createProject = (req, res) =>{
    const name = req.body.Nome;
    const description = req.body.Descricao;
    const city = req.body.Cidade;
    const principalResponsible = req.body.PrincipalResponsavel;
    const beginDate = req.body.DataInicial;
    const finalDate = req.body.DataFinal;

    const sql = `INSERT INTO Projetos (Nome, Descricao, Cidade, PrincipalResponsavel, DataInicial, DataFinal) VALUES (?, ?, ?, ?, ?, ?)`;

    db.run(sql, [name, description, city, principalResponsible, beginDate, finalDate], (err) =>{
        if(err){
            throw err;
        } else {
            res.send('Projeto cadastrado com sucesso!');
        }
    });
}

const updateProject = (req, res) =>{
    const { id } = req.params;

    const name = req.body.Nome;
    const description = req.body.Descricao;
    const city = req.body.Cidade;
    const principalResponsible = req.body.PrincipalResponsavel;
    const beginDate = req.body.DataInicial;
    const finalDate = req.body.DataFinal;

    const sql = `UPDATE Projetos SET Nome = ?, Descricao = ?, Cidade = ?, PrincipalResponsavel = ?, DataInicial = ?, DataFinal = ? WHERE ProjetoID = ${id}`;

    db.run(sql, [name, description, city, principalResponsible, beginDate, finalDate], (err) =>{
        if(err){
            throw err;
        } else {
            res.send('Projeto atualizado com sucesso!');
        }
    });
}

const deleteProject = (req, res) =>{
    const { id } = req.params;
    const sql = `DELETE FROM Projetos WHERE ProjetoID = ${id}`;
    db.run(sql, [], (err) =>{
        if(err){
            throw err;
        } else {
            res.send('Projeto deletado com sucesso!');
        }
    });
}

module.exports = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
}