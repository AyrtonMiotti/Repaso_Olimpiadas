// 1 - Invocamos a Express/ Summon Express
const express = require('express');
const app = express();

// 2 - Seteamos urlencoded para capturar los datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json())

// 3 - Seteamos el directorio public / Set "public" directory
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

// 54 - Establecemos el motor de plantillas ejs
app.set('view engine', 'ejs');

// 5 - Invocamos a bcryptjs
const bcryptjs = require('bcryptjs');

// 6 - Var. de session
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
    
}));

// 7 - Llamamos al módulo de conexión a la BD
const connection = require('./Database/db'); 

// 8 - Rutas
app.get('/login', (req, res)=>{
    return res.render('login');
})

//Set-ExecutionPolicy Unrestricted