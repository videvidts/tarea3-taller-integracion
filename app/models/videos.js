module.exports = (sequelize, Sequelize) => {
  const Video = sequelize.define("video", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    tipo: {
      type: Sequelize.TEXT
    },
    nombre: {
      type: Sequelize.TEXT
    },
    descripcion: {
      type: Sequelize.TEXT
    },
    duracion: {
      type: Sequelize.TEXT
    },
    generos: {
      type: Sequelize.ARRAY
    },
    actores: {
      type: Sequelize.ARRAY
    },
    directores: {
      type: Sequelize.ARRAY
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
