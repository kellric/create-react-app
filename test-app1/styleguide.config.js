module.exports = {
  components: 'src/js/components/**/*.js',
  webpackConfig: {
    module: {
      rules: [        
        {        
          exclude: /node_modules/
        }        
      ]
    }
  }
};
