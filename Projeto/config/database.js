module.exports = {
    development: {
      username: 'postgres',   // seu nome de usuário do PostgreSQL
      password: 'luigi',     // sua senha do PostgreSQL
      database: 'pessoas',  // nome do seu banco de dados
      host: 'localhost',     // host do banco de dados
      dialect: 'postgres',   // define o dialeto como postgres
    },
    test: {
      username: 'postgres',
      password: 'luigi',
      database: 'pessoas',
      host: 'localhost',
      dialect: 'postgres',
    },
    production: {
      username: 'postgres',
      password: 'luigi',
      database: 'pessoas',
      host: 'localhost',
      dialect: 'postgres',
    }
  };