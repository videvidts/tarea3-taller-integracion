module.exports = (sequelize, Sequelize) => {
  const Coleccion = sequelize.define("coleccion", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING
    }
  });

  return Coleccion;
};
