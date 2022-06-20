const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const dbPath = './database/yamaha.db';
const db = new sqlite3.Database(dbPath);
const app = express();

const getAllAlocations = (req, res) =>{

}

const createAlocation = (req, res) =>{
    const sql = 'INSERT INTO Alocacao (HorasJaneiro, HorasFevereiro, HorasMarco, HorasAbril, HorasMaio, HorasJunho, HorasJulho, HorasAgosto, HorasSetembro, HorasOutubro, HorasNovembro, HorasDezembro, DataInicialAlocacao, DataFinalAlocacao, ProjetoID, FuncionarioID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const { idProject } = req.query.id;
    const beginDate = req.body.inicial;
    const finalDate = req.body.final;
    const hrJan = req.body.hrjan;
    const hrFeb = req.body.hrfev;
    const hrMar = req.body.hrmar;
    const hrApr = req.body.hrabr;
    const hrMay = req.body.hrmai;
    const hrJun = req.body.hrjun;
    const hrJul = req.body.hrjul;
    const hrAug = req.body.hrago;
    const hrSep = req.body.hrset;
    const hrOct = req.body.hrout;
    const hrNov = req.body.hrnov;
    const hrDec = req.body.hrdez;

    db.run(sql, [hrJan, hrFeb, hrMar, hrApr, hrMay, hrJun, hrJul, hrAug, hrSep, hrOct, hrNov, hrDec, beginDate, finalDate, idProject, 1], (err) =>{
        if(err){
            throw err;
        } else {
            res.render('novo');
        }
    });
}

module.exports = {
    getAllAlocations,
    createAlocation
}