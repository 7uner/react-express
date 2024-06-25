const path = require('path');
const express = require('express');
const router = require('./lib/router');
const { MongoClient, ServerApiVersion } = require('mongodb');

const { PORT = 3001 } = process.env;

const app = express();

// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// Serve API requests from the router
//app.use('/api', router);

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

// Handle client routing, return all requests to the app ------------------------------------------------------
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

// standard routing with a json response
app.get('/hello', (_req, res) => {
  res.json({ Message: 'hello world' });
});

// standard post request with form data as json, the request body is automatically parsed
app.post('/formSubmit', (_req, res) => {
  console.log(_req.body);
  res.status(200).json({ Message: 'form data recieved and processed' });
});

// variables in the oath (not the best practice)
app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

//route groups

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

var productData = {};

app.get('/products', (_req, res) => {
  res.json(productData);
});

app.post('/products/:name', (_req, res) => {
  productData[_req.params.name] = _req.body;
  console.log(productData);
  res.send('product added!');
});

app.put('/products/:name/', (_req, res) => {
  productData[_req.params.name] = _req.body;
  res.send('product updated!');
});

app.put('/sell/:name/:quantity', (_req, res) => {
  productData[_req.params.name]['quantity'] -= parseInt(_req.params.quantity);
  res.send('inventory updated!');
});

app.delete('/products/:name', (_req, res) => {
  delete productData[_req.params.name];
  res.send('item removed!');
});

app.get('/db', (_req, res) => {
  addProduct().catch(console.dir);
  res.send('Product added!');
});
// Handle Database related using Mongo DB Atlas

// Connection String
const uri =
  'mongodb+srv://admin:admin@feedback.qa82eyz.mongodb.net/?retryWrites=true&w=majority&appName=FeedBack';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('ProductData').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function addProduct() {
  try {
    // connect to the db first
    await client.connect();
    // choose the table we want to use
    const database = client.db('ShoppingSite');
    const table = database.collection('ProductData');
    await table.insertOne({ id: 0, name: 'Tablet' });
    //await table.insertMany(products);
  } finally {
    // close the connection once we are done
    await client.close();
  }
}

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
