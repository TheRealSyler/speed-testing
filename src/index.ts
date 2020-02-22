import express from 'express';
import { join } from 'path';
import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';

require('dotenv').config();

(async () => {
  console.log('START');
  console.log();

  const uri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster-gxjt5.azure.mongodb.net/test?retryWrites=true&w=majority`;
  const conn = await mongoose.createConnection(uri, { useNewUrlParser: true });

  const path = join(__dirname, 'public');
  const port = process.env.PORT;

  const app = express();

  app.use(express.json());

  app.use(express.static(path));

  app.listen(port, function() {
    console.log('Example app listening on port', port);
  });
})();
