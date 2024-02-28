const express = require('express');
const app = express();
const mongoose = require('mongoose');

const productRoute = require('./routes/product.route');

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);

app.get('/', function (req, res) {
  res.send('Hello from Node API Server hi')
})

mongoose.connect("mongodb+srv://betolugo:tQoyA6OISyaMaWhb@backenddb.8rdsrbu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
  console.log("Connected to database!")
  app.listen(3000, () => {
    console.log('Server is runnin on port 3000')
  })
})
.catch(() => {
  console.log("Connection failed")
})