const production = {
  DATABASE: {
    host: "220.94.42.246",
    port: "3306",
    user: "skydb",
    password: "dbsky",
    database: "anoldstorydb",
    dialect: "postgres",
    timezone: "+09:00",
  },
  SESSION_SECRET: "ThisIsReallySecret",
  API_PORT: 3001,
};

const development = {
  DATABASE: {
    host: "220.94.42.246",
    port: "3306",
    user: "skydb",
    password: "dbsky",
    database: "anoldstorydb",
    dialect: "postgres",
    timezone: "+09:00",
  },
  SESSION_SECRET: "ThisIsMySecret",
  API_PORT: 3001,
};

module.exports =
  process.env.NODE_ENV == "production" ? production : development;
