const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user')(sequelize, Sequelize);
const Store = require('./store')(sequelize, Sequelize);
const Rating = require('./rating')(sequelize, Sequelize);

User.hasMany(Rating);
Store.hasMany(Rating);
Rating.belongsTo(User);
Rating.belongsTo(Store);

sequelize.sync();

module.exports = { User, Store, Rating };
