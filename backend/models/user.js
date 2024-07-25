module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [20, 60]
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
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8, 16],
          is: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/
        }
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [0, 400]
        }
      },
      role: {
        type: DataTypes.ENUM('System Admin', 'Normal User', 'Store Owner'),
        allowNull: false
      }
    });
  
    return User;
  };
  