const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");


//Se crear el servidor
const app = express();

//Conectamos a la base de datos
conectarDB();
app.use(cors());
app.use(express.json());


const usuarioRoutes = require('./routes/usuario');
app.use('/api/Usuario', usuarioRoutes);

const rolRoutes = require('./routes/rol');
app.use('/api/Rol', rolRoutes);

const empresaRoutes = require('./routes/empresa');
app.use('/api/Empresa', empresaRoutes);

const areaRoutes = require('./routes/area');
app.use('/api/Area', areaRoutes);

const ciudadRoutes = require('./routes/ciudad');
app.use('/api/Ciudad', ciudadRoutes);

const cargoRoutes = require('./routes/cargo');
app.use('/api/Cargo', cargoRoutes);

app.listen(4000, () =>{
    console.log('El servidor esta corriendo perfextamente!!!');
})