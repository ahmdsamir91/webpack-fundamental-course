var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin("shared.js");

module.exports = {
    context: path.resolve("js"),
    entry : {
        home : './home_page.js',
        contact : './contact_page.js',
        about : './about_page.js',
    },
    output : {
        path: path.resolve("build/js/"), // build is dist
        publicPath : "public/assets/js/",
        filename : "[name].js"
    },
    plugins:[commonsPlugin],
    devServer:{
        contentBase: 'public'
    },
            
    module : {
        loaders:[
            {
                test : /\.es6$/,
                exclude :/node_modules/,
                loaders :"babel-loader"
            },
            {
                test : /\.js$/,
                exclude:/node_modules/,
                loaders: "jshint-loader",
                enforce: "pre"
            }
        ]
    },
    resolve: {
        extensions : ['.js','.es6']
    },
    watch : true
}