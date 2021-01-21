const production = {
  API_URL: "https://api.anoldstory.com",
};

const development = {
  API_URL: "https://api.anoldstory.com",
};

module.exports =
  process.env.NODE_ENV === "production" ? production : development;
