const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(200),
      validate: {
        notNull: true,
        notEmpty: true,
      },
      allowNull: false,
      set(value) {
        this.setDataValue('name', value.toLowerCase());
      }
    },
    life: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true,
        min: 1,
        max:300,
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true,
        min: 1,
        max:300,
      }
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true,
        min: 1,
        max:300,
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true,
        min: 1,
        max:300,
      }
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true,
        min: 1,
        max:300,
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true,
        min: 1,
        max:300,
      }
    },
    frontSprite: {
      type: DataTypes.STRING(300),
      validate: {
        isUrl: true,
      },
      allowNull: true,
      field: 'front_sprite'
    },
    from: {
      type: DataTypes.STRING(4),
      validate: {
        isAlpha: true
      },
      allowNull: false,
      defaultValue: 'db'
    }
  });
};
