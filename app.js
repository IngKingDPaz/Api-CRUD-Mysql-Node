const express = require("express");
// const morgan = require("morgan");
// const helmet = require("helmet");
const createError = require("http-errors");

// connexion a base de datos//
const mysql = require('mysql')
const myconn = require('express-myconnection')

///
let cors = require("cors");

//fin

const indexRoutes = require("./routes/index"); // Archivo donde estan las rutas del api
const app = express();
app.use(cors());
//app.options('*',cors());

//cadena de conexion
const dbOptions = {
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'unab2022',
    database: 'unab_partidos_prueba'
}

app.use(myconn(mysql, dbOptions, 'single'))


// app.use(helmet());

// app.use(morgan("tiny"));
app.use(express.json());

app.use("/", indexRoutes);

// app.use((req, res, next) => {
//   next(createError.NotFound());
// });

app.listen(3002, function () {
  console.log("Api en el puerto 3002");
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Content-Security-Policy','*' );
    res.setHeader("Content-Type", "text/html");
    res.setHeader('Access-Control-Allow-Headers', '*');
   // res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
   // res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});