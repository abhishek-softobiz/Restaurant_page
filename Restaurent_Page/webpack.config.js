const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer:{
    static:path.join(__dirname,'dist'),
    compress:true,
    port:3600
},
};
