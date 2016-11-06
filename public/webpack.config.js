var path = require('path');
var webpack = require('webpack');
// var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var autoprefixer = require('autoprefixer');
var poststylus = require('poststylus');
var PROD = JSON.parse(process.env.PROD_ENV || 0);
//var isDev = process.env.NODE_ENV; need if want to test on dev or not

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var glob_entries = require('webpack-glob-entries')

var plugins = [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        "window.jquery": "jquery"
    }),

];
if (PROD) {
    console.log('==============minify==============');
    // plugins.push(new webpack.optimize.CommonsChunkPlugin({name:"home",filename:"home-chunk.js"}));
    // plugins.push(new webpack.optimize.CommonsChunkPlugin({name:"commons", filename:["home-chunks.js"]}));
    plugins.push(new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}));
    plugins.push(new webpack.optimize.DedupePlugin());
}
//get all coffee and styl files======
var scripts = glob_entries('./coffee/**/*.coffee')
//var styles = glob_entries('./styl/**/*.styl') // uncomment for all styles parse, but not guaranteed order of files
var styleEntry = './styl/index.styl';
var scriptStyleFiles = {}

for (var attrname in scripts) {
  scriptStyleFiles[attrname] = scripts[attrname]
}
scriptStyleFiles['style'] = styleEntry
// for (var attrname in styles) {
//   scriptStyleFiles.push(styles[attrname])
// }
//get all coffee and styl files=======
console.log(scriptStyleFiles)

plugins.push(new ExtractTextPlugin('../css/styles.css'));
dev = {
  entry: scriptStyleFiles,
  output: {
    path: path.join(__dirname, "assets/js"),
    filename: '[name].js',
    // chunkFilename: '[name]-[chunkhash].js',
    // namedChunkFilename: "[name]-chunk.js",
    // filename: PROD ? 'js/[name].min.js' : 'js/[name].js',
    publicPath: "public/assets/js/"
  },
  resolveLoader: {
    modulesDirectories: ['node_modules','bower_components']
  },
  resolve: {
    extensions: ['', '.js','.coffee','.styl','.css','.jpg','.png'],
    root: [
      path.join(__dirname, 'src')
    ],
    alias: {
        "parallaxjs" : __dirname+"/node_modules/parallax.js/parallax.min.js",
        "waypoints" : __dirname+"/node_modules/waypoints/lib/jquery.waypoints.min.js",
        "counterup" : __dirname+"/vendor/plugins/counterUp/counterup.min.js",
        'masonry': 'masonry-layout',
        'isotope': 'isotope-layout'
    }
  },
  module: {
    loaders: [
      // Extract css files
      { test: /\.styl$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-relative-loader",{allChunks: true}) },
      {
          test: /\.css/,
          loader: "css-loader!postcss-loader!stylus-relative-loader"
      },
      { test: /\.html$/, loader: "underscore-template-loader" },
      { test: /.(jpe?g|gif|png)$/, loader: 'url-loader' },
      {
          test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.otf($|\?)|\.eot($|\?)|\.svg($|\?)/,
          loader: 'url-loader'
      },
      // Optionally extract less files
      // or any other compile-to-css language
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.(coffee\.md|litcoffee)$/, loader: "coffee-loader?literate" }
    ]
  },
  stylus: {
    use: [
      poststylus([ 'autoprefixer' ])
    ]
  },
  plugins: plugins
};
prod = {
  entry: scriptStyleFiles,
  output: {
    path: path.join(__dirname, "assets/js"),
    filename: '[name].js',
    chunkFilename: 'chunk-[name]-[chunkhash].js',
    // namedChunkFilename: "[name]-chunk.js",
    // filename: PROD ? 'js/[name].min.js' : 'js/[name].js',
    publicPath: "public/assets/js/"
  },
  resolveLoader: {
    modulesDirectories: ['node_modules','bower_components']
  },
  resolve: {
    extensions: ['', '.js','.coffee','.styl','.css','.jpg','.png'],
    root: [
      path.join(__dirname, 'src')
    ],
    alias: {
        "parallaxjs" : __dirname+"/node_modules/parallax.js/parallax.min.js",
        "waypoints" : __dirname+"/node_modules/waypoints/lib/jquery.waypoints.min.js",
        "counterup" : __dirname+"/vendor/plugins/counterUp/counterup.min.js",
        'masonry': 'masonry-layout',
        'isotope': 'isotope-layout'
    }
  },
  module: {
    loaders: [
      // Extract css files
      { test: /\.styl$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-relative-loader",{allChunks: true}) },
      {
          test: /\.css/,
          loader: "css-loader!postcss-loader!stylus-relative-loader"
      },
      { test: /\.html$/, loader: "underscore-template-loader" },
      { test: /.(jpe?g|gif|png)$/, loader: 'file-loader?emitFile=false&name=../../[path][name].[ext]' },
      // Optionally extract less files
      // or any other compile-to-css language
      {
          test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.otf($|\?)|\.eot($|\?)|\.svg($|\?)/,
          loader: 'url-loader'
      },
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.(coffee\.md|litcoffee)$/, loader: "coffee-loader?literate" }
    ]
  },
  stylus: {
    use: [
      poststylus([ 'autoprefixer' ])
    ]
  },
  plugins: plugins
};


if (PROD) {
    console.log('===========production===========');
      const fs = require('fs');
      var chunks = glob_entries('./assets/js/chunk-*.js');
      console.log('===========remove old chunks===========');
      for (var attrname in chunks) {
        if (chunks.hasOwnProperty(attrname)) {
          fs.unlinkSync(chunks[attrname]);
          console.log('successfully deleted '+chunks[attrname]+ ' chunk');
        }
      }
      console.log('===========old chunks removed===========');
    module.exports = prod;
} else{
    console.log('===========development===========');
    module.exports = dev;
}

