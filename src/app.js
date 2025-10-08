const express = require('express');
require('dotenv').config();
require('express-async-errors');
const cors = require('cors');
const morgan = require('morgan');

const usersRouter = require('./routes/users');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/users', usersRouter);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  const status = err.statusCode || 500;
  res.status(status).json({ error: err.message || 'Internal Server Error' });
});

module.exports = app;
