const production = {
  API_URL: "https://api.anoldstory.net",
};

const development = {
  API_URL: "http://localhost:3001",
};

module.exports = process.env.NODE_ENV === "production" ? production : development;
