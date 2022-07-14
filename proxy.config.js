const proxy = [
    {
      context: '/api',
      target: 'https://localhost:44301',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;