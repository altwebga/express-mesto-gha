const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { ERROR_CODE_NOT_FOUND } = require('./errors/errors');

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use((req, res, next) => {
  req.user = {
    _id: '631da76416e32fed48a5e41f',
  };

  next();
});

app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

app.use('/', (req, res) => {
  res.status(ERROR_CODE_NOT_FOUND).send({ message: 'Неправильный путь' });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен порт: ${PORT}`);
});
