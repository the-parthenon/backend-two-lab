const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const { getHouses, deleteHouse, createHouse, updateHouse } = require('./controller.js');

app.get('/api/houses', getHouses);
app.post('/api/houses', createHouse);
app.put('/api/houses/:id', updateHouse);
app.delete('/api/houses/:id', deleteHouse);

const portNumber = 4004;
app.listen(portNumber, () => {
  console.log(`Listening on port ${portNumber}`);
});
