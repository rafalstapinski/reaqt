module.exports = {
  IS_PRODUCTION: process.env.NODE_ENV === "production",
  SERVER_PORT: process.env.PORT || 4000,
  API_HOST: "http://raf.al:8336"
};
