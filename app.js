const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connect('mongodb://localhost/demoAPI');
const demoRouter = express.Router();
const port = process.env.PORT || 3000;
const Demo = require('./models/userModel');

demoRouter.route('/demos')
  .get((req, res) => {
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    Demo.find(query, (err, demos) => {
      if (err) {
        return res.send(err);
      }
      return res.json(demos);
    });
  });
  demoRouter.route('/demos/:id')
  .get((req, res) => {
    Demo.findById(req.params.id, (err, demos) => {
      if (err) {
        return res.send(err);
      }
      return res.json(demos);
    });
  });
app.use('/', demoRouter);

app.get('/', (req, res) => {
  res.send('Welcome to The Prog!');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
