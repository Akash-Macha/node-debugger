import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import debugCode from './debug-code.js';

/*  we don't have __dirname in ES Modules,
    https://stackoverflow.com/a/62892482 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Create Express App
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });

    debugCode();
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});