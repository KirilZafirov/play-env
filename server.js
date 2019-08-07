const path = require('path');
const fs = require('fs');
const express = require('express');
process.env.NODE_CONFIG_ENV = process.env.NODE_CONFIG_ENV || 'development';
process.env.NODE_CONFIG_DIR = './tools/environment';
const config = require('config');
const md5 = require('js-md5');
const compression = require('compression');


const app = express();
const appPath = path.join(__dirname, 'dist/play-env/');
const indexFilePath = path.join(appPath, 'index.html');
const configStr = JSON.stringify(config);
const configHash = md5(configStr);


function appendHashToEnvConfigFile(){
    const indexFile = fs.readFileSync(indexFilePath);
    let indexContent = indexFile.toString();
    indexContent = indexContent.replace(
        '<script type="text/javascript" src="env-config.js"></script>',
        `<script type="text/javascript" src="env-config.${configHash}.js"></script>`
    );
}

appendHashToEnvConfigFile();


app.use(compression());

app.use(`/env-config.${configHash}.js`, (req, res) => {
  res.setHeader('content-type', 'application/javascript');

  res.send(`window.EnvConfig = ${configStr}`);
});

app.use(express.static(appPath));

// Enable html5 mode for the static server
app.use('**', (req, res) => {
  res.sendFile(indexFilePath);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/`);
});
