const express = require('express');
const app = express();

// 1-  
app.use(express.urlencoded({extended:false}));
app.use(express.json())

// 2 -
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

// 3 -
app.set('view engine', 'ejs');

// 4 -
const bcryptjs = require('bcryptjs');

// 5 -
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
    
}));

// 6 -
const connection = require('./Pagina Web/Database/db'); 

// 7 - Rutas
app.get('/', (req, res)=>{
    return res.render('login');
})

app.get('/register', (req, res)=>{
    return res.render('register');
})


// 11 - Autenticación
app.post('/auth', async (req, res)=>{
    const user = req.body.user;
    const pass = req.body.password;
    let passwordHaash = await bcryptjs.hash(pass, 8);

        connection.query('SELECT * FROM USERS WHERE name_user = ?', [user], async(error, results) =>{
            if(error){
                console.log("El error que devolvió SQL es: " + error);
                return;
            }

            if (results[0] === undefined){
                return res.render('login', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "Usuario y/o contraseña incorrectos",
                    alertIcon: "error",
                    showConfirmButton: true,
                    timer: 1200,
                    ruta: ''
                })
                return;
            }
            else{
                if (pass != results[0].passwor) {
                    return res.render('login', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "Usuario y/o contraseña incorrectos",
                        alertIcon: "error",
                        showConfirmButton: true,
                        timer: 1200,
                        ruta: ''
                    });
                }
                else {
                    req.session.name = results[0].name_user;
                    req.session.loggedin1 = true;
                    return res.render('login', {
                        alert: true,
                        alertTitle: "Conexión exitosa",
                        alertMessage: "¡Login correcto!",
                        alertIcon: "succes",
                        showConfirmButton: false,
                        timer: 900,
                        ruta: ''
                    });
                }
            }
        })
});






app.listen(3309, (req, res)=>{
    console.log("");
    console.log("-------------------------------------------");
    console.log("SERVER RUNNING IN http://localhost:3309");
});


/*

npm i init -y

npm i express express-session mysql ejs bcryptjs

Set-ExecutionPolicy Unrestricted

*/
