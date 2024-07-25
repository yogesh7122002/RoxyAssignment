const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const storeRoutes = require('./routes/storeRoutes');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/database');

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/store', storeRoutes);
app.use('/user', userRoutes);

sequelize.authenticate().then(() => {
  console.log('Database connected...');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
