// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  'plugins': {
    // to edit target browsers: use "browserslist" field in package.json
    // 样式前缀补全策略
    'autoprefixer': {},
    'postcss-pxtorem': {
      rootValue: 102, // 1024
      propList: ['*']
    }
  }
}
