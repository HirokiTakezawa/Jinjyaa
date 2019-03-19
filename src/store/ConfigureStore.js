if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ConfigureStore.Prod');
} else {
  module.exports = require('./ConfigureStore.Dev');
}
