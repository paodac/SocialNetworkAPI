const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

// Conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB');
mongoose.set('debug', true);


app.get('/', (req, res) => {
  res.send('¡API funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
