const express = require('express');
const bodyParser = require('body-parser');
const projectsRoutes = require('./routes/projects');
const employeesRoutes = require('./routes/employees');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/projects', projectsRoutes);
app.use('/employees', employeesRoutes);

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});