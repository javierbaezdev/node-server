//@imports
const express = require('express');
const cors = require('cors');
require('dotenv').config();

//@routes
const routesV1 = require('./app/V1/routes');

//@constants
const PORT = 3000;
const CORS_OPTIONS = {
  origin: process.env.CLIENT_URL,
};

const app = express();

//@config app
app.use(cors(CORS_OPTIONS));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//@all routes
// Load routes
app.get('/', (req, res) => res.send('ONKU API 🚀'));
app.use('/api/v1', routesV1);

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
