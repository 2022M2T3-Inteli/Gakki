const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

const projectsRoutes = require('./routes/projects');
const employeesRoutes = require('./routes/employees');
const governanceRoutes = require('./routes/governance');
const roleRoutes = require('./routes/role');

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

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});