var path = require('path');

module.exports = {
    context: path.resolve("js"),
    entry : ["./util.js","./app.js"],
    output : {
        path: path.resolve("build/js/"), // build is dist
        publicPath : "public/assets/js/",
        filename : "bundle.js"
    },
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