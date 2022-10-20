module.exports = {
  HOST: "localhost",
  USER: "tarea3",
  PASSWORD: "123",
  DB: "tarea3db",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
