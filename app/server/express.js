        'use strict';
        var express = require('express');
        var path = require('path');
        var logger = require('morgan');
        var bodyParser = require('body-parser');
        var config = require('../config.json');
        var webpack = require('webpack');
        var WebpackDevServer = require('webpack-dev-server');
        var proxy = require('proxy-middleware');
        var url = require('url');

        var isProduction = process.env.NODE_ENV === 'production';
        //var publicPath = path.join(__dirname, '..','..', 'assets');
        var PORT = (isProduction ? process.env.PORT: config.DEV_PORT);

        // -------- my proxy----------------------
        var app = express();
        // proxy the request for static assets
        app.use('/assets', proxy(url.parse('http://localhost:8081/assets')));

        //app.use(require('marty-express')({
        //    routes: require('../routes'),
        //    application: require('../application').Application
        //}));


        app.use(function logErrors(err, req, res, next) {
                console.error(err.stack);
                next(err);
            }
        );

        app.set('views', path.join(__dirname, 'views'));
        app.set('view engine', 'ejs');

        app.get('/*', function(req, res) {
            //res.sendFile(__dirname + '/index.html');
              res.render('index', {body: 'YO bro', state:'ok'});
        });




        if(!isProduction){
            //----- my-webpack-dev-server------------------
            var webpackServer = new WebpackDevServer(webpack(require('../../webpack.config')), {
                contentBase: __dirname,
                hot: true,
                quiet: false,
                noInfo: false,
                publicPath: '/assets/',

                stats: { colors: true }
            });

        //run webpack hot reload server
            webpackServer.listen(8081, 'localhost', function() {});
        }
        //run express server
        app.listen(PORT);


        //AS SEEN here: http://stackoverflow.com/questions/26203725/how-to-allow-for-webpack-dev-server-to-allow-entry-points-from-react-router



