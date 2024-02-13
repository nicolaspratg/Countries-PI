const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Activity",
    {                                               // id serialization is done automatically
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          // SQL Option that allows to specify constraints
          // Between 1 and 5 included
          min: 1,
          max: 5,
        },
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0, // duration cannot be negative
        },
      },
      season: {
        type: DataTypes.ENUM("Summer", "Winter", "Autumn", "Spring"),
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
