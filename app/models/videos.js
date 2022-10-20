module.exports = (sequelize, Sequelize) => {
  const Video = sequelize.define("video", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    tipo: {
      type: Sequelize.STRING
    },
    nombre: {
      type: Sequelize.STRING
    },
    descripcion: {
      type: Sequelize.STRING
    },duracion: {
      type: Sequelize.STRING
    },
    generos: {
      type: Sequelize.STRING
    },
    actores: {
      type: Sequelize.STRING
    },
    directores: {
      type: Sequelize.STRING
    },
    reprodSemanales: {
      type: Sequelize.INTEGER
    },
    infoSerie: {
      type: Sequelize.JSON
    },
    idColeccion: {
      type: Sequelize.INTEGER
    }
  });

  return Video;
};
