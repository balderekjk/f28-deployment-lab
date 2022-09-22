const express = require('express');

const path = require('path');

require('dotenv').config();

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(cors());

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar');
var rollbar = new Rollbar({
  accessToken: 'e4d29d63fd914b74930b22290c0a5a8c',
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log('Hello world!');

app.use('/', express.static(path.join(__dirname, '../client/index.html')));

app.use(express.static(path.join(__dirname, '../client')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './index.html'));
// });

app.listen(port, () => console.log(`Docked at port ${port}`));
