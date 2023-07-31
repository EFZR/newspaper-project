const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/usuario/login", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    if(username=='rzuniga' && password=='12345'){
        const datos = {
            id:"123",   
            nombre: "Rodirgo Zuniga",
            email:"rzuniga@gmail.com",
            codigo: "ABDE456-LK"
        };
        res.status(200).json(datos)
    }else{     
        res.status(400).send("credenciales incorrectas")
    }
});
   
app.listen(3010,()=>{
    console.log("Servicio iniciado en el puerto 3010")
});