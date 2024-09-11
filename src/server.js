const path = require('path');
const express = require('express');

const { PORT = 3001 } = process.env;

const app = express();

// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// Serve app production bundle
app.use(express.static('dist/app'));

// Code to deal with CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Private-Network', true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader('Access-Control-Max-Age', 7200);

  next();
});

// Handle client routing, return all requests to the app
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.get('/hello', async (_req, res) => {
  res.send({ message: 'Hello World!' });
});

app.post('/submit', (_req, res) => {
  console.log(_req.body['message']);
  res.send('data recieved!');
});

app.put('/submit', (_req, res) => {
  console.log(_req.body['message']);
  res.send('data recieved!');
});

app.delete('/remove', (_req, res) => {
  console.log(_req.body['message']);
  res.send('item removed from inventory!');
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
