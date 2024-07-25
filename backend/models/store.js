module.exports = (sequelize, DataTypes) => {
    const Store = sequelize.define('Store', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 60]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [0, 400]
        }
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: true,
        validate: {
          min: 1,
          max: 5
        }
      }
    });
  
    return Store;
  };
  