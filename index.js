"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// para contar un poco el proceso de CI, vamos a hacer el desarrollo, en modo dev de un trabajo
// luego sera subido al servidor
// en el servidor, lo primero que ocurre es el testeo
// si el testeo da ok, prosigue con el buildeo
// si el build esta ok, se ejecuta y se da start para que comience el proyecto
// ** importante destacar que, como el package va a ir a la nube, vamos a poder ejecutar los scripts alli tambien
var express = require("express");
var app = express();
var PORT = 3001;

app.get("/hola", function (req, res) {
    res.json({
        message: "hola desde el server"
    });
});
(function () {
    app.listen(PORT, function () {
        console.log("Server is runing on port: ", PORT);
    });
}());
