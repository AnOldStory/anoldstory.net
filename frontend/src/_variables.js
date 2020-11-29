const production = {
  API_URL: "http://api.anoldstory.com",
};

const development = {
  API_URL: "http://api.anoldstory.com",
};

module.exports =
  process.env.NODE_ENV === "production" ? production : development;
