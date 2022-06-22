const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const dbPath = './database/yamaha.db';

const app = express();
const PORT = 3000;

const projectsRoutes = require('./routes/projects');
const employeesRoutes = require('./routes/employees');
const governanceRoutes = require('./routes/governance');
const roleRoutes = require('./routes/role');
const alocationRoutes = require('./routes/alocation');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use('/projects', projectsRoutes);
app.use('/employees', employeesRoutes);
app.use('/governance', governanceRoutes);
app.use('/role', roleRoutes);
app.use('/alocation', alocationRoutes);

app.get('/alterarprojeto', (req, res) =>{
    const id = req.query["id"];
    const db = new sqlite3.Database(dbPath);
    const sql = `SELECT * FROM Projeto INNER JOIN Governanca ON Governanca.GovernancaID = Projeto.GovernancaID WHERE ProjetoID = ${id}`;
    db.get(sql, [], (err, row) =>{
        if(err){
            throw err;
        } else {
            console.log(row);
            res.render('alterarprojeto', { projeto: row });
        }
    });
});

app.post('/updateproject', (req, res) =>{
    const db = new sqlite3.Database(dbPath);
    const id = req.body.id;
    const name = req.body.nome;
    const description = req.body.descricao;
    const city = req.body.governanca;
    const principalResponsible = req.body.responsavel;
    const beginDate = req.body.datainicial;
    const finalDate = req.body.datafinal;

    const sql = `UPDATE Projeto SET NomeProjeto = ?, Descricao = ?, PrincipalResponsavel = ?, DataInicial = ?, DataFinal = ?, GovernancaID = ? WHERE ProjetoID = ${id}`;

    db.run(sql, [name, description, principalResponsible, beginDate, finalDate, city], (err) =>{
        if(err){
            throw err;
        } else {
            res.redirect('back');
        }
    });
});

app.get('/alterarfuncionario', (req, res) =>{
    const id = req.query["id"];
    const db = new sqlite3.Database(dbPath);
    const sql = `SELECT * FROM Funcionario INNER JOIN Governanca ON Governanca.GovernancaID = Funcionario.GovernancaID INNER JOIN Funcao ON Funcao.FuncaoID = Funcionario.FuncaoID WHERE FuncionarioID = ${id}`;
    db.get(sql, [], (err, row) =>{
        if(err){
            throw err;
        } else {
            console.log(row);
            res.render('alterarfuncionario', { funcionario: row });
        }
    });
});

app.post('/updateemployee', (req, res) =>{
    const db = new sqlite3.Database(dbPath);
    const id = req.body.id;
    const firstName = req.body.nome;
    const lastName = req.body.sobrenome;
    const funcYamaha = req.body.btnradio;
    const register = req.body.registro;
    const governace = req.body.governanca;
    const company = req.body.empresa;
    const durationContract = req.body.duracaocontrato;
    const hoursProject = req.body.jornadaTrabalho;
    const functionID = req.body.funcaoID;

    const sql = `UPDATE Funcionario SET Nome = ?, Sobrenome = ?, FuncionarioYamaha = ?, Registro = ?, Empresa = ?, DuracaoContrato = ?, HorasProjetos = ?, GovernancaID = ?, FuncaoID = ? WHERE FuncionarioID = ${id}`;
    db.run(sql, [firstName, lastName, funcYamaha, register, company, durationContract, hoursProject, governace, functionID], (err) =>{
        if(err){
            throw err;
        } else {
            res.redirect('back');
        }
    });
});

app.post('/deleteproject', (req, res) =>{
    const db = new sqlite3.Database(dbPath);
    const id = req.body.id;
    const sql = `DELETE FROM Projeto WHERE ProjetoID = ${id}`;
    db.run(sql, [], (err) =>{
        if(err){
            throw err;
        } else {
            res.send();
        }
    });
});

app.post('/deleteemployee', (req, res) =>{
    const db = new sqlite3.Database(dbPath);
    const id = req.body.id;
    const sql = `DELETE FROM Funcionario WHERE FuncionarioID = ${id}`;
    db.run(sql, [], (err) =>{
        if(err){
            throw err;
        } else {
            res.send();
        }
    });
});

app.get('/atribuir', (req, res) =>{
    res.render('atribuir');
});

app.get('/graficos', (req, res) =>{
    res.render('graficos');
});

app.get('/home', (req, res) =>{
    res.render('home');
});

app.get('/', (req, res) =>{
    res.render('index');
});

app.get('/novaFuncao', (req, res) =>{
    res.render('novaFuncao');
});

app.get('/novaGovernanca', (req, res) =>{
    res.render('novaGovernanca');
});

app.get('/novo', (req, res) =>{
    res.render('novo');
});

app.get('/novoFuncionario', (req, res) =>{
    res.render('novoFuncionario');
});

app.get('/novoProjeto', (req, res) =>{
    res.render('novoProjeto');
});

app.get('/tabelaFuncionarios', (req, res) =>{
    res.render('tabelaFuncionarios');
});

app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});