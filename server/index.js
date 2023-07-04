import express from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';
import {dbHost, dbUser, dbPassword, dbName, dbPort} from './credentials.js';

const app = express();

app.use(express.json());
app.use(cors());

const db = createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName,
});

app.get('/temperature', (req, res) => {
  const query = 'SELECT temp from temperature ORDER BY id DESC LIMIT 1';
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    }

    return res.json(data);
  });
});

app.listen(dbPort, () => {
  console.log('Connected to backend');
});
