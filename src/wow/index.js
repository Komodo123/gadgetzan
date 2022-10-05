module.exports = (client) => ({
  retail: require ('./retail') (client),
  classic: require ('./classic') (client)
});