process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')
const ignoreTestFiles = {
    test: /test\.js$/,
    use: 'ignore-loader'
  }
  environment.loaders.append('ignoreTestFiles', ignoreTestFiles)
module.exports = environment.toWebpackConfig()
