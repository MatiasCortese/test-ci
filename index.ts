// para contar un poco el proceso de CI, vamos a hacer el desarrollo, en modo dev de un trabajo
// luego sera subido al servidor
// en el servidor, lo primero que ocurre es el testeo
// si el testeo da ok, prosigue con el buildeo
// si el build esta ok, se ejecuta y se da start para que comience el proyecto
// ** importante destacar que, como el package va a ir a la nube, vamos a poder ejecutar los scripts alli tambien
import * as express from "express";

const app = express();
const PORT = 3001;

app.get("/hola", (req, res) => {
    res.json({
        message: "hola desde el server"
    })
});

(function(){
    app.listen(PORT, () => {
        console.log("Server is runing on port: ", PORT);
    })
}());