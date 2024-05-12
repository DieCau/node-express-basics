console.clear();
import express from 'express';
import dotenv from 'dotenv';
import { USERS_BBDD } from './bbdd.js'

const app = express();

dotenv.config();
const PORT = 3000;

app.use(express.json());
app.use(express.text());

// Obtener los detalles de una cuenta
app.get('/account/:guid', (req,res) => {
    // obtener un usuario

    const user = USERS_BBDD.find(user => user.guid === req.params.guid)
    
    if( !user ) res.status(404).send()

    res.send(user);
    
});

// Crear una cuenta
app.post('/account', (req,res) => {});

// Actualizar una cuenta
app.path('/account', (req,res) => {});

// Eliminar una cuenta
app.delete('/account', (req,res) => {});


app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
