console.clear();

import express from 'express';
const app = express();

const PORT = 3000

app.use(express.json());
app.use(express.text());

app.post('/micuenta', (req, res) => {
  console.log(req.body);  
  res.send();
});

app.put('/producto', (req, res) => {
  console.log(req.body);  
  res.send();
});

app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
