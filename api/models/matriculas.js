"use strict";
module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define(
    "Matriculas",
    {
      status: DataTypes.STRING,
    },
    {}
  );
  Matriculas.associate = function (models) {
    Matriculas.belongsTo(models.Pessoas);
    Matriculas.belongsTo(models.Turmas);
  };
  return Matriculas;
};
