const path = require('path');
const express = require('express');
const router = require('./lib/router');

const { PORT = 3001 } = process.env;

const app = express();

// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// Serve API requests from the router
//app.use('/api', router);

// Serve app production bundle
app.use(express.static('dist/app'));

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

app.get('/hello', (_req, res) => {
  res.json({ Message: 'hello world' });
});

app.post('/formSubmit', (_req, res) => {
  console.log(_req.body);
  res.status(200).json({ Message: 'form data revieved and processed' });
});

app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});
app.post('/formSubmit', (_req, res) => {
  console.log(_req.body);
  res.status(200).json({ Message: 'form data revieved and processed' });
});
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
const products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Phone' },
];
app.get('/api/users', (req, res) => {
  res.json(users);
});
app.get('/api/products', (req, res) => {
  res.json(products);
});
app.get('/products', (_req, res) => {
  res.json(productData);
});
app.get('/api/products/:name', (_req, res) => {
  productData[_req.params.name] = _req.body;
  console.log(productData);
  res.send('product added!');
});
app.put('/products/:name/:quantity', (_req, res) => {
  productData[_req.params.name]['quantity '] = _req.body.quantity;
  res.send('product updated!');
});
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
