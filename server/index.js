import express from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';
import {dbHost, dbUser, dbPassword, dbName, dbPort} from './credentials.js';

//start service using command `node index.js` within server directory

const app = express();

app.use(express.json());
app.use(cors());

const db = createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName,
});

// --------------------
// Queries for homepage

app.get('/temperature', (req, res) => {
  const query = 'SELECT * from temperature ORDER BY id DESC LIMIT 1';
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    }

    return res.json(data);
  });
});

app.get('/windSpeed', (req, res) => {
  const query = 'SELECT speed from windSpeed ORDER BY id DESC LIMIT 1';
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    }

    return res.json(data);
  });
});

app.get('/gustSpeed', (req, res) => {
  const query = 'SELECT speed from gustSpeed ORDER BY id DESC LIMIT 1';
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    }

    return res.json(data);
  });
});

app.get('/pressure', (req, res) => {
  const query = 'SELECT pressure from pressure ORDER BY id DESC LIMIT 1';
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    }

    return res.json(data);
  });
});

app.get('/windDirection', (req, res) => {
  const query = 'SELECT direction from windDirection ORDER BY id DESC LIMIT 1';
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    }

    return res.json(data);
  });
});

app.get('/gustDirection', (req, res) => {
  const query = 'SELECT direction from gustDirection ORDER BY id DESC LIMIT 1';
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    }

    return res.json(data);
  });
});

app.get('/humidity', (req, res) => {
  const query = 'SELECT humidity from humidity ORDER BY id DESC LIMIT 1';
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    }

    return res.json(data);
  });
});

app.get('/rain', (req, res) => {
  const query = 'SELECT quantity from rain ORDER BY id DESC LIMIT 1';
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    }

    return res.json(data);
  });
});



// ----------------------
// Queries for 1 hour
app.get('/windSpeed1hr', (req, res) => {
  const query = 'SELECT speed, date from windSpeed ORDER BY id DESC LIMIT 30';
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    }

    return res.json(data);
  });
});

app.get('/temperature1hr', (req, res) => {
  const query = 'SELECT temp, date from temperature ORDER BY id DESC LIMIT 30';
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    }

    return res.json(data);
  });
});









// ---------------------
// Queries for 12 hours
app.get('/windSpeed12hr', (req, res) => {
  const query = 'SELECT speed, date from windSpeed ORDER BY id DESC LIMIT 360';
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    }

    return res.json(data);
  });
});

app.get('/temperature12hr', (req, res) => {
  const query = 'SELECT temp, date from temperature ORDER BY id DESC LIMIT 360';
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
