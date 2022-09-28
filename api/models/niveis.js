"use strict";
module.exports = (sequelize, sequelize, DataTypes) => {
  const Niveis = sequelize.define(
    "Niveis",
    {
      descr_nivel: DataTypes.STRING,
    },
    {}
  );
  Niveis.associate = function (models) {
    Pessoas.hasMany(models.Turmas, {
      foreignKey: "nivel_id",
    });
  };
  return Niveis;
};
