const path = require('path');
const express = require('express');
const proxy = require('http-proxy-middleware');
process.env.NODE_CONFIG_ENV = process.env.NODE_CONFIG_ENV || 'development';
process.env.NODE_CONFIG_DIR = './tools/environment';
const config = require('config');

const app = express();

const cliPort = process.env.NG_PORT || 4200;

app.use('/env-config.js', (req, res) => {
  res.setHeader('content-type', 'application/javascript');

  const configStr = JSON.stringify(config);

  res.send(`window.EnvConfig = ${configStr}`);
});


app.use(proxy('**', { target: `http://localhost:${cliPort}` , changeOrigin: true,}));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  const url = `http://localhost:${port}/`;
});