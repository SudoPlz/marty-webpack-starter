/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "bin/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';
	var express = __webpack_require__(6);
	var path = __webpack_require__(2);
	var logger = __webpack_require__(3);
	var bodyParser = __webpack_require__(4);
	var configFile = __webpack_require__(5);
	//var webpack = require('webpack');
	//var WebpackDevServer = require('webpack-dev-server');
	var proxy = __webpack_require__(1);
	var url = __webpack_require__(7);
	//var webpackConfig = require('../../webpack.config');
	var morgan = __webpack_require__(3);
	var bodyParser = __webpack_require__(4);

	var isProduction = process.env.NODE_ENV === 'production';
	//var publicPath = path.join(__dirname, '..','..', 'assets');

	// -------- my proxy----------------------
	var app = express();
	// proxy the request for static assets

	// now requests to '/assets' are proxied to 'http://localhost:8081/assets'
	app.use('/assets', proxy(url.parse('http://localhost:8081/assets')));

	app.use(function logErrors(err, req, res, next) {
	    console.error(err.stack);
	    next(err);
	});

	//css folder
	app.use('/styles', express['static'](path.join('app', 'styles')));
	//app.set('styles', express.static(path.join('app', 'styles')));
	//app.engine('.ejs', require('ejs').__express);
	//app.set('views', 'bin');
	app.set('views', path.join('app', 'server', 'views'));
	app.set('view engine', 'ejs');

	var PORT = isProduction ? process.env.PORT : configFile.DEV_PORT;
	app.set('port', process.env.PORT || configFile.DEV_PORT);

	app.use(morgan('dev'));
	app.use(bodyParser.json());
	//app.use(require('marty-express')({
	//    routes: require('../routes'),
	//    application: require('../application'),
	//    rendered: function (result) {
	//        console.log('Rendered ' + result.req.url);
	//    }
	//
	//}));

	var Application = __webpack_require__(8);
	var appl = new Application();
	console.log('Application: ' + appl);
	//console.log('Required ejs file: ' + require('./views/index.ejs'));
	app.get('/*', function (req, res) {
	    //res.sendFile(__dirname + '/index.html');
	    res.render('index', { body: 'YO bro', state: 'ok' });
	});

	var server = app.listen(app.get('port'), function () {
	    console.info('Express server started at http://localhost:' + app.get('port'));
	});

	//console.log('webpackConfig.output.publicPath: '+webpackConfig.output.publicPath);

	//if(!isProduction){
	//    //----- my-webpack-dev-server------------------
	//    var webpackServer = new WebpackDevServer(webpack(webpackConfig), {
	//        //contentBase: __dirname,
	//        hot: false,
	//        inline: false,
	//        quiet: true,
	//        noInfo: false,
	//        headers: { 'Access-Control-Allow-Origin': '*' },
	//        publicPath: '/assets/',
	//
	//
	//        stats: { colors: true }
	//    });
	//
	//    //run webpack hot reload server
	//    webpackServer.listen(8081, 'localhost', function (err) {
	//        if(err) {
	//            return console.log(err);
	//        }
	//        console.log('Webpack server also running, but on port 8081');
	//
	//    });
	//}

	//AS SEEN here: http://stackoverflow.com/questions/26203725/how-to-allow-for-webpack-dev-server-to-allow-entry-points-from-react-router

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "serverEntryPrototype.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("proxy-middleware");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("morgan");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
		"APP_NAME": "Marty webpack",
		"API": {
			"ROOT": "http://my-api/",
			"AUTH_SCHEME": "my-auth-scheme"
		},
		"DEV_PORT": 8080
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("url");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _marty = __webpack_require__(9);

	var _marty2 = _interopRequireDefault(_marty);

	function requireFromContext(context, callback) {
	    // Iterate through all js files in context folder
	    context.keys().forEach(function (key) {
	        if (!/\.js/.test(key)) {
	            callback(key);
	        }
	    });
	}

	var Application = (function (_Marty$Application) {
	    function Application(options) {
	        _classCallCheck(this, Application);

	        _get(Object.getPrototypeOf(Application.prototype), 'constructor', this).call(this, options);
	        //console.group('Marty registrations: ');
	        this.registerDependencies();
	        console.log('Now registering hooks.');
	        this.registerHooks();
	        console.log('Now registering router.');
	        this.router = __webpack_require__(10);
	        console.log('Attempting to re auth..');
	        this.loginActionCreators.attemptReAuth();
	        //console.groupEnd();
	    }

	    _inherits(Application, _Marty$Application);

	    _createClass(Application, [{
	        key: 'registerDependencies',
	        value: function registerDependencies() {
	            var _this = this;

	            var context = __webpack_require__(35);

	            requireFromContext(context, function (key) {
	                // NOTE: id could potentially clash if files are named the same.
	                var id = key.substr(key.lastIndexOf('/') + 1);
	                console.log('Registering marty assets: ', id);
	                _this.register(id, context(key));
	            });
	        }
	    }, {
	        key: 'registerHooks',
	        value: function registerHooks() {
	            var context = __webpack_require__(47);

	            requireFromContext(context, function (key) {
	                console.log('registering hook', key);
	                context(key); // Run
	            });
	        }
	    }]);

	    return Application;
	})(_marty2['default'].Application);

	module.exports = Application;

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "application.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("marty");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _marty = __webpack_require__(9);

	var _marty2 = _interopRequireDefault(_marty);

	var _reactRouter = __webpack_require__(11);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	exports['default'] = _reactRouter2['default'].create({
	  routes: __webpack_require__(12),
	  location: location()
	});

	function location() {
	  if (typeof window !== 'undefined') {
	    return _reactRouter2['default'].HashLocation;
	  }
	}
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "router.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(11);

	var _layout = __webpack_require__(15);

	var _layout2 = _interopRequireDefault(_layout);

	var _componentsAuthenticatedPage = __webpack_require__(31);

	var _componentsAuthenticatedPage2 = _interopRequireDefault(_componentsAuthenticatedPage);

	var _pagesLogout = __webpack_require__(13);

	var _pagesLogout2 = _interopRequireDefault(_pagesLogout);

	var _pagesHome = __webpack_require__(32);

	var _pagesHome2 = _interopRequireDefault(_pagesHome);

	var _pagesHome3 = _interopRequireDefault(_pagesHome);

	var _pagesAbout = __webpack_require__(33);

	var _pagesAbout2 = _interopRequireDefault(_pagesAbout);

	var _pagesNotfound = __webpack_require__(34);

	var _pagesNotfound2 = _interopRequireDefault(_pagesNotfound);

	exports['default'] = _react2['default'].createElement(
	  _reactRouter.Route,
	  { name: 'public', path: '/', handler: _layout2['default'] },
	  _react2['default'].createElement(_reactRouter.DefaultRoute, { handler: _pagesHome3['default'] }),
	  _react2['default'].createElement(_reactRouter.NotFoundRoute, { handler: _pagesNotfound2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { name: 'home', path: '/', handler: _pagesHome3['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { name: 'about', path: '/about', handler: _pagesAbout2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { name: 'logout', path: '/logout', handler: (0, _componentsAuthenticatedPage2['default'])(_pagesLogout2['default']) })
	);

	//<Route name="profile" path="/profile" handler={AuthenticatedPage(Profile)} />
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "routes.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var LogoutPage = (function (_React$Component) {
	  function LogoutPage() {
	    _classCallCheck(this, LogoutPage);

	    _get(Object.getPrototypeOf(LogoutPage.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _inherits(LogoutPage, _React$Component);

	  _createClass(LogoutPage, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        'You are now logged out.'
	      );
	    }
	  }]);

	  return LogoutPage;
	})(_react2['default'].Component);

	LogoutPage.propTypes = {};

	exports['default'] = LogoutPage;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "logout.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(11);

	var _componentsNavbar = __webpack_require__(16);

	var _componentsNavbar2 = _interopRequireDefault(_componentsNavbar);

	//import 'bootstrap/dist/css/bootstrap.css';
	//import 'styles/app.css';
	//import 'styles/rbm-complete.css';

	var Layout = (function (_React$Component) {
	  function Layout() {
	    _classCallCheck(this, Layout);

	    _get(Object.getPrototypeOf(Layout.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _inherits(Layout, _React$Component);

	  _createClass(Layout, [{
	    key: 'render',
	    value: function render() {
	      var name = this.context.router.getCurrentPath();

	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_componentsNavbar2['default'], null),
	        _react2['default'].createElement(
	          'div',
	          { key: name, className: 'route-holder' },
	          _react2['default'].createElement(_reactRouter.RouteHandler, null)
	        )
	      );
	    }
	  }]);

	  return Layout;
	})(_react2['default'].Component);

	Layout.contextTypes = {
	  router: _react2['default'].PropTypes.func
	};

	exports['default'] = Layout;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "layout.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = __webpack_require__(17);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(18);

	var _reactRouterBootstrap = __webpack_require__(19);

	var _loginFormModalLogin = __webpack_require__(20);

	var _loginFormModalLogin2 = _interopRequireDefault(_loginFormModalLogin);

	var MyNavbar = (function (_React$Component) {
	    function MyNavbar(props) {
	        _classCallCheck(this, MyNavbar);

	        _get(Object.getPrototypeOf(MyNavbar.prototype), 'constructor', this).call(this, props);
	        //this.render = this.render.bind(this);
	        this.state = { isLoginModalOpen: false };

	        this.openLoginModal = this.openLoginModal.bind(this);
	        this.closeLoginModal = this.closeLoginModal.bind(this);
	    }

	    _inherits(MyNavbar, _React$Component);

	    _createClass(MyNavbar, [{
	        key: 'render',
	        value: function render() {
	            var loggedInNavBar = _react2['default'].createElement(
	                _reactBootstrap.Nav,
	                { navbar: true, right: true },
	                _react2['default'].createElement(
	                    _reactBootstrap.DropdownButton,
	                    { eventKey: 3, title: 'Dropdown' },
	                    _react2['default'].createElement(
	                        _reactRouterBootstrap.MenuItemLink,
	                        { to: 'destination', params: { someparam: 'hello' } },
	                        'Profile'
	                    ),
	                    _react2['default'].createElement(_reactBootstrap.MenuItem, { divider: true }),
	                    _react2['default'].createElement(
	                        _reactRouterBootstrap.MenuItemLink,
	                        { to: 'destination', params: { someparam: 'hello' } },
	                        'Logout'
	                    )
	                )
	            );

	            var loggedOutNavBar = _react2['default'].createElement(
	                _reactBootstrap.Nav,
	                { navbar: true, right: true },
	                _react2['default'].createElement(
	                    _reactBootstrap.NavItem,
	                    { onClick: this.openLoginModal },
	                    'Login'
	                ),
	                _react2['default'].createElement(
	                    _reactBootstrap.NavItem,
	                    null,
	                    'Register'
	                )
	            );
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(_loginFormModalLogin2['default'], { show: this.state.isLoginModalOpen, onHide: this.closeLoginModal }),
	                _react2['default'].createElement(
	                    _reactBootstrap.Navbar,
	                    { brand: _react2['default'].createElement(
	                            'a',
	                            { href: '#' },
	                            'React-Bootstrap'
	                        ), toggleNavKey: 0 },
	                    _react2['default'].createElement(
	                        _reactBootstrap.CollapsibleNav,
	                        { eventKey: 0 },
	                        ' ',
	                        _react2['default'].createElement(
	                            _reactBootstrap.Nav,
	                            { navbar: true },
	                            _react2['default'].createElement(
	                                _reactRouterBootstrap.NavItemLink,
	                                { to: 'home', params: { someparam: 'hello' } },
	                                'Home'
	                            ),
	                            _react2['default'].createElement(
	                                _reactRouterBootstrap.NavItemLink,
	                                { to: 'about', params: { someparam: 'hello' } },
	                                'About'
	                            )
	                        ),
	                        this.props.isLoggedIn ? loggedInNavBar : loggedOutNavBar
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'openLoginModal',
	        value: function openLoginModal() {
	            this.setState({ isLoginModalOpen: true });
	        }
	    }, {
	        key: 'closeLoginModal',
	        value: function closeLoginModal() {
	            this.setState({ isLoginModalOpen: false });
	        }
	    }]);

	    return MyNavbar;
	})(_react2['default'].Component);

	MyNavbar.propTypes = {
	    isLoginModalOpen: _react2['default'].PropTypes.bool
	};

	exports['default'] = MyNavbar;
	module.exports = exports['default'];
	/* This is the eventKey referenced */

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "navbar.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("react-router-bootstrap");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _marty = __webpack_require__(9);

	var _marty2 = _interopRequireDefault(_marty);

	var _reactBootstrapLibPanel = __webpack_require__(21);

	var _reactBootstrapLibPanel2 = _interopRequireDefault(_reactBootstrapLibPanel);

	var _reactBootstrap = __webpack_require__(18);

	var _reactBootstrapModal = __webpack_require__(30);

	var _reactBootstrapModal2 = _interopRequireDefault(_reactBootstrapModal);

	var ModalLogin = (function (_React$Component) {
	    function ModalLogin() {
	        _classCallCheck(this, ModalLogin);

	        _get(Object.getPrototypeOf(ModalLogin.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _inherits(ModalLogin, _React$Component);

	    _createClass(ModalLogin, [{
	        key: 'handleLogin',
	        value: function handleLogin(payload) {
	            this.app.loginActionCreators.attemptLogin(payload.email, payload.password, payload.rememberMe);
	        }
	    }, {
	        key: 'render',

	        //logout: function(e) {
	        //    e.preventDefault();
	        //    //SessionActionCreators.logout();
	        //    //TODO: Do something on logout
	        //},

	        value: function render() {
	            //console.log('show is : '+this.props.show);
	            return _react2['default'].createElement(
	                _reactBootstrapModal2['default'],
	                {
	                    show: this.props.show,
	                    onHide: this.props.onHide,
	                    backdrop: false,
	                    animate: true
	                },
	                _react2['default'].createElement(
	                    _reactBootstrapModal2['default'].Header,
	                    { closeButton: true },
	                    _react2['default'].createElement(
	                        _reactBootstrapModal2['default'].Title,
	                        { id: 'ModalHeader' },
	                        'Please log in.'
	                    )
	                ),
	                _react2['default'].createElement(
	                    _reactBootstrapModal2['default'].Body,
	                    null,
	                    _react2['default'].createElement(_reactBootstrap.Input, { name: 'email', type: 'email', placeholder: 'Username or Email', required: true }),
	                    _react2['default'].createElement(_reactBootstrap.Input, { name: 'password', type: 'password', placeholder: 'Password',
	                        required: true, minLength: 5 })
	                ),
	                _react2['default'].createElement(
	                    _reactBootstrapModal2['default'].Footer,
	                    null,
	                    _react2['default'].createElement(
	                        _reactBootstrapModal2['default'].Dismiss,
	                        { className: 'btn btn-default' },
	                        'Cancel'
	                    ),
	                    _react2['default'].createElement(
	                        _reactBootstrap.Button,
	                        { onClick: this.handleLogin, type: '#', bsStyle: 'success' },
	                        'Login'
	                    )
	                )
	            );
	        }
	    }]);

	    return ModalLogin;
	})(_react2['default'].Component);

	ModalLogin.propTypes = {};

	exports['default'] = _marty2['default'].createContainer(ModalLogin, {
	    listenTo: ['loginStore'],
	    fetch: {
	        error: function error() {
	            return this.app.loginStore.getError();
	        }
	    }
	});
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "modalLogin.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(22);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _BootstrapMixin = __webpack_require__(23);

	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

	var _CollapsibleMixin = __webpack_require__(26);

	var _CollapsibleMixin2 = _interopRequireDefault(_CollapsibleMixin);

	var _utilsDeprecatedProperty = __webpack_require__(29);

	var _utilsDeprecatedProperty2 = _interopRequireDefault(_utilsDeprecatedProperty);

	var Panel = _react2['default'].createClass({
	  displayName: 'Panel',

	  mixins: [_BootstrapMixin2['default'], _CollapsibleMixin2['default']],

	  propTypes: {
	    collapsable: _utilsDeprecatedProperty2['default'],
	    collapsible: _react2['default'].PropTypes.bool,
	    onSelect: _react2['default'].PropTypes.func,
	    header: _react2['default'].PropTypes.node,
	    id: _react2['default'].PropTypes.string,
	    footer: _react2['default'].PropTypes.node,
	    eventKey: _react2['default'].PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'panel',
	      bsStyle: 'default'
	    };
	  },

	  handleSelect: function handleSelect(e) {
	    e.selected = true;

	    if (this.props.onSelect) {
	      this.props.onSelect(e, this.props.eventKey);
	    } else {
	      e.preventDefault();
	    }

	    if (e.selected) {
	      this.handleToggle();
	    }
	  },

	  handleToggle: function handleToggle() {
	    this.setState({ expanded: !this.state.expanded });
	  },

	  getCollapsibleDimensionValue: function getCollapsibleDimensionValue() {
	    return _react2['default'].findDOMNode(this.refs.panel).scrollHeight;
	  },

	  getCollapsibleDOMNode: function getCollapsibleDOMNode() {
	    if (!this.isMounted() || !this.refs || !this.refs.panel) {
	      return null;
	    }

	    return _react2['default'].findDOMNode(this.refs.panel);
	  },

	  render: function render() {
	    var classes = this.getBsClassSet();
	    var collapsible = this.props.collapsible || this.props.collapsable;

	    return _react2['default'].createElement('div', _extends({}, this.props, {
	      className: (0, _classnames2['default'])(this.props.className, classes),
	      id: collapsible ? null : this.props.id, onSelect: null }), this.renderHeading(), collapsible ? this.renderCollapsableBody() : this.renderBody(), this.renderFooter());
	  },

	  renderCollapsableBody: function renderCollapsableBody() {
	    var collapseClass = this.prefixClass('collapse');

	    return _react2['default'].createElement('div', {
	      className: (0, _classnames2['default'])(this.getCollapsibleClassSet(collapseClass)),
	      id: this.props.id,
	      ref: 'panel',
	      'aria-expanded': this.isExpanded() ? 'true' : 'false' }, this.renderBody());
	  },

	  renderBody: function renderBody() {
	    var allChildren = this.props.children;
	    var bodyElements = [];
	    var panelBodyChildren = [];
	    var bodyClass = this.prefixClass('body');

	    function getProps() {
	      return { key: bodyElements.length };
	    }

	    function addPanelChild(child) {
	      bodyElements.push((0, _react.cloneElement)(child, getProps()));
	    }

	    function addPanelBody(children) {
	      bodyElements.push(_react2['default'].createElement('div', _extends({ className: bodyClass }, getProps()), children));
	    }

	    function maybeRenderPanelBody() {
	      if (panelBodyChildren.length === 0) {
	        return;
	      }

	      addPanelBody(panelBodyChildren);
	      panelBodyChildren = [];
	    }

	    // Handle edge cases where we should not iterate through children.
	    if (!Array.isArray(allChildren) || allChildren.length === 0) {
	      if (this.shouldRenderFill(allChildren)) {
	        addPanelChild(allChildren);
	      } else {
	        addPanelBody(allChildren);
	      }
	    } else {

	      allChildren.forEach((function (child) {
	        if (this.shouldRenderFill(child)) {
	          maybeRenderPanelBody();

	          // Separately add the filled element.
	          addPanelChild(child);
	        } else {
	          panelBodyChildren.push(child);
	        }
	      }).bind(this));

	      maybeRenderPanelBody();
	    }

	    return bodyElements;
	  },

	  shouldRenderFill: function shouldRenderFill(child) {
	    return _react2['default'].isValidElement(child) && child.props.fill != null;
	  },

	  renderHeading: function renderHeading() {
	    var header = this.props.header;
	    var collapsible = this.props.collapsible || this.props.collapsable;

	    if (!header) {
	      return null;
	    }

	    if (!_react2['default'].isValidElement(header) || Array.isArray(header)) {
	      header = collapsible ? this.renderCollapsableTitle(header) : header;
	    } else {
	      var className = (0, _classnames2['default'])(this.prefixClass('title'), header.props.className);

	      if (collapsible) {
	        header = (0, _react.cloneElement)(header, {
	          className: className,
	          children: this.renderAnchor(header.props.children)
	        });
	      } else {
	        header = (0, _react.cloneElement)(header, { className: className });
	      }
	    }

	    return _react2['default'].createElement('div', { className: this.prefixClass('heading') }, header);
	  },

	  renderAnchor: function renderAnchor(header) {
	    return _react2['default'].createElement('a', {
	      href: '#' + (this.props.id || ''),
	      className: this.isExpanded() ? null : 'collapsed',
	      'aria-expanded': this.isExpanded() ? 'true' : 'false',
	      onClick: this.handleSelect }, header);
	  },

	  renderCollapsableTitle: function renderCollapsableTitle(header) {
	    return _react2['default'].createElement('h4', { className: this.prefixClass('title') }, this.renderAnchor(header));
	  },

	  renderFooter: function renderFooter() {
	    if (!this.props.footer) {
	      return null;
	    }

	    return _react2['default'].createElement('div', { className: this.prefixClass('footer') }, this.props.footer);
	  }
	});

	exports['default'] = Panel;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Panel.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	'use strict';

	(function () {
		'use strict';

		function classNames() {

			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	})();

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _styleMaps = __webpack_require__(24);

	var _styleMaps2 = _interopRequireDefault(_styleMaps);

	var _utilsCustomPropTypes = __webpack_require__(25);

	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

	var BootstrapMixin = {
	  propTypes: {
	    bsClass: _utilsCustomPropTypes2['default'].keyOf(_styleMaps2['default'].CLASSES),
	    bsStyle: _utilsCustomPropTypes2['default'].keyOf(_styleMaps2['default'].STYLES),
	    bsSize: _utilsCustomPropTypes2['default'].keyOf(_styleMaps2['default'].SIZES)
	  },

	  getBsClassSet: function getBsClassSet() {
	    var classes = {};

	    var bsClass = this.props.bsClass && _styleMaps2['default'].CLASSES[this.props.bsClass];
	    if (bsClass) {
	      classes[bsClass] = true;

	      var prefix = bsClass + '-';

	      var bsSize = this.props.bsSize && _styleMaps2['default'].SIZES[this.props.bsSize];
	      if (bsSize) {
	        classes[prefix + bsSize] = true;
	      }

	      var bsStyle = this.props.bsStyle && _styleMaps2['default'].STYLES[this.props.bsStyle];
	      if (this.props.bsStyle) {
	        classes[prefix + bsStyle] = true;
	      }
	    }

	    return classes;
	  },

	  prefixClass: function prefixClass(subClass) {
	    return _styleMaps2['default'].CLASSES[this.props.bsClass] + '-' + subClass;
	  }
	};

	exports['default'] = BootstrapMixin;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "BootstrapMixin.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var styleMaps = {
	  CLASSES: {
	    'alert': 'alert',
	    'button': 'btn',
	    'button-group': 'btn-group',
	    'button-toolbar': 'btn-toolbar',
	    'column': 'col',
	    'input-group': 'input-group',
	    'form': 'form',
	    'glyphicon': 'glyphicon',
	    'label': 'label',
	    'thumbnail': 'thumbnail',
	    'list-group-item': 'list-group-item',
	    'panel': 'panel',
	    'panel-group': 'panel-group',
	    'progress-bar': 'progress-bar',
	    'nav': 'nav',
	    'navbar': 'navbar',
	    'modal': 'modal',
	    'row': 'row',
	    'well': 'well'
	  },
	  STYLES: {
	    'default': 'default',
	    'primary': 'primary',
	    'success': 'success',
	    'info': 'info',
	    'warning': 'warning',
	    'danger': 'danger',
	    'link': 'link',
	    'inline': 'inline',
	    'tabs': 'tabs',
	    'pills': 'pills'
	  },
	  addStyle: function addStyle(name) {
	    styleMaps.STYLES[name] = name;
	  },
	  SIZES: {
	    'large': 'lg',
	    'medium': 'md',
	    'small': 'sm',
	    'xsmall': 'xs'
	  },
	  GLYPHS: ['asterisk', 'plus', 'euro', 'eur', 'minus', 'cloud', 'envelope', 'pencil', 'glass', 'music', 'search', 'heart', 'star', 'star-empty', 'user', 'film', 'th-large', 'th', 'th-list', 'ok', 'remove', 'zoom-in', 'zoom-out', 'off', 'signal', 'cog', 'trash', 'home', 'file', 'time', 'road', 'download-alt', 'download', 'upload', 'inbox', 'play-circle', 'repeat', 'refresh', 'list-alt', 'lock', 'flag', 'headphones', 'volume-off', 'volume-down', 'volume-up', 'qrcode', 'barcode', 'tag', 'tags', 'book', 'bookmark', 'print', 'camera', 'font', 'bold', 'italic', 'text-height', 'text-width', 'align-left', 'align-center', 'align-right', 'align-justify', 'list', 'indent-left', 'indent-right', 'facetime-video', 'picture', 'map-marker', 'adjust', 'tint', 'edit', 'share', 'check', 'move', 'step-backward', 'fast-backward', 'backward', 'play', 'pause', 'stop', 'forward', 'fast-forward', 'step-forward', 'eject', 'chevron-left', 'chevron-right', 'plus-sign', 'minus-sign', 'remove-sign', 'ok-sign', 'question-sign', 'info-sign', 'screenshot', 'remove-circle', 'ok-circle', 'ban-circle', 'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down', 'share-alt', 'resize-full', 'resize-small', 'exclamation-sign', 'gift', 'leaf', 'fire', 'eye-open', 'eye-close', 'warning-sign', 'plane', 'calendar', 'random', 'comment', 'magnet', 'chevron-up', 'chevron-down', 'retweet', 'shopping-cart', 'folder-close', 'folder-open', 'resize-vertical', 'resize-horizontal', 'hdd', 'bullhorn', 'bell', 'certificate', 'thumbs-up', 'thumbs-down', 'hand-right', 'hand-left', 'hand-up', 'hand-down', 'circle-arrow-right', 'circle-arrow-left', 'circle-arrow-up', 'circle-arrow-down', 'globe', 'wrench', 'tasks', 'filter', 'briefcase', 'fullscreen', 'dashboard', 'paperclip', 'heart-empty', 'link', 'phone', 'pushpin', 'usd', 'gbp', 'sort', 'sort-by-alphabet', 'sort-by-alphabet-alt', 'sort-by-order', 'sort-by-order-alt', 'sort-by-attributes', 'sort-by-attributes-alt', 'unchecked', 'expand', 'collapse-down', 'collapse-up', 'log-in', 'flash', 'log-out', 'new-window', 'record', 'save', 'open', 'saved', 'import', 'export', 'send', 'floppy-disk', 'floppy-saved', 'floppy-remove', 'floppy-save', 'floppy-open', 'credit-card', 'transfer', 'cutlery', 'header', 'compressed', 'earphone', 'phone-alt', 'tower', 'stats', 'sd-video', 'hd-video', 'subtitles', 'sound-stereo', 'sound-dolby', 'sound-5-1', 'sound-6-1', 'sound-7-1', 'copyright-mark', 'registration-mark', 'cloud-download', 'cloud-upload', 'tree-conifer', 'tree-deciduous', 'cd', 'save-file', 'open-file', 'level-up', 'copy', 'paste', 'alert', 'equalizer', 'king', 'queen', 'pawn', 'bishop', 'knight', 'baby-formula', 'tent', 'blackboard', 'bed', 'apple', 'erase', 'hourglass', 'lamp', 'duplicate', 'piggy-bank', 'scissors', 'bitcoin', 'yen', 'ruble', 'scale', 'ice-lolly', 'ice-lolly-tasted', 'education', 'option-horizontal', 'option-vertical', 'menu-hamburger', 'modal-window', 'oil', 'grain', 'sunglasses', 'text-size', 'text-color', 'text-background', 'object-align-top', 'object-align-bottom', 'object-align-horizontal', 'object-align-left', 'object-align-vertical', 'object-align-right', 'triangle-right', 'triangle-left', 'triangle-bottom', 'triangle-top', 'console', 'superscript', 'subscript', 'menu-left', 'menu-right', 'menu-down', 'menu-up']
	};

	exports['default'] = styleMaps;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "styleMaps.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var ANONYMOUS = '<<anonymous>>';

	var CustomPropTypes = {
	  /**
	   * Checks whether a prop provides a DOM element
	   *
	   * The element can be provided in two forms:
	   * - Directly passed
	   * - Or passed an object which has a `getDOMNode` method which will return the required DOM element
	   *
	   * @param props
	   * @param propName
	   * @param componentName
	   * @returns {Error|undefined}
	   */
	  mountable: createMountableChecker(),
	  /**
	   * Checks whether a prop matches a key of an associated object
	   *
	   * @param props
	   * @param propName
	   * @param componentName
	   * @returns {Error|undefined}
	   */
	  keyOf: createKeyOfChecker
	};

	/**
	 * Create chain-able isRequired validator
	 *
	 * Largely copied directly from:
	 *  https://github.com/facebook/react/blob/0.11-stable/src/core/ReactPropTypes.js#L94
	 */
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName) {
	    componentName = componentName || ANONYMOUS;
	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required prop `' + propName + '` was not specified in ' + '`' + componentName + '`.');
	      }
	    } else {
	      return validate(props, propName, componentName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createMountableChecker() {
	  function validate(props, propName, componentName) {
	    if (typeof props[propName] !== 'object' || typeof props[propName].render !== 'function' && props[propName].nodeType !== 1) {
	      return new Error('Invalid prop `' + propName + '` supplied to ' + '`' + componentName + '`, expected a DOM element or an object that has a `render` method');
	    }
	  }

	  return createChainableTypeChecker(validate);
	}

	function createKeyOfChecker(obj) {
	  function validate(props, propName, componentName) {
	    var propValue = props[propName];
	    if (!obj.hasOwnProperty(propValue)) {
	      var valuesString = JSON.stringify(Object.keys(obj));
	      return new Error('Invalid prop \'' + propName + '\' of value \'' + propValue + '\' ' + ('supplied to \'' + componentName + '\', expected one of ' + valuesString + '.'));
	    }
	  }
	  return createChainableTypeChecker(validate);
	}

	exports['default'] = CustomPropTypes;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CustomPropTypes.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _utilsTransitionEvents = __webpack_require__(27);

	var _utilsTransitionEvents2 = _interopRequireDefault(_utilsTransitionEvents);

	var _utilsDeprecationWarning = __webpack_require__(28);

	var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);

	var CollapsibleMixin = {

	  propTypes: {
	    defaultExpanded: _react2['default'].PropTypes.bool,
	    expanded: _react2['default'].PropTypes.bool
	  },

	  getInitialState: function getInitialState() {
	    var defaultExpanded = this.props.defaultExpanded != null ? this.props.defaultExpanded : this.props.expanded != null ? this.props.expanded : false;

	    return {
	      expanded: defaultExpanded,
	      collapsing: false
	    };
	  },

	  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
	    var willExpanded = nextProps.expanded != null ? nextProps.expanded : nextState.expanded;
	    if (willExpanded === this.isExpanded()) {
	      return;
	    }

	    // if the expanded state is being toggled, ensure node has a dimension value
	    // this is needed for the animation to work and needs to be set before
	    // the collapsing class is applied (after collapsing is applied the in class
	    // is removed and the node's dimension will be wrong)

	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();
	    var value = '0';

	    if (!willExpanded) {
	      value = this.getCollapsibleDimensionValue();
	    }

	    node.style[dimension] = value + 'px';

	    this._afterWillUpdate();
	  },

	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    // check if expanded is being toggled; if so, set collapsing
	    this._checkToggleCollapsing(prevProps, prevState);

	    // check if collapsing was turned on; if so, start animation
	    this._checkStartAnimation();
	  },

	  // helps enable test stubs
	  _afterWillUpdate: function _afterWillUpdate() {},

	  _checkStartAnimation: function _checkStartAnimation() {
	    if (!this.state.collapsing) {
	      return;
	    }

	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();
	    var value = this.getCollapsibleDimensionValue();

	    // setting the dimension here starts the transition animation
	    var result = undefined;
	    if (this.isExpanded()) {
	      result = value + 'px';
	    } else {
	      result = '0px';
	    }
	    node.style[dimension] = result;
	  },

	  _checkToggleCollapsing: function _checkToggleCollapsing(prevProps, prevState) {
	    var wasExpanded = prevProps.expanded != null ? prevProps.expanded : prevState.expanded;
	    var isExpanded = this.isExpanded();
	    if (wasExpanded !== isExpanded) {
	      if (wasExpanded) {
	        this._handleCollapse();
	      } else {
	        this._handleExpand();
	      }
	    }
	  },

	  _handleExpand: function _handleExpand() {
	    var _this = this;

	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();

	    var complete = function complete() {
	      _this._removeEndEventListener(node, complete);
	      // remove dimension value - this ensures the collapsible item can grow
	      // in dimension after initial display (such as an image loading)
	      node.style[dimension] = '';
	      _this.setState({
	        collapsing: false
	      });
	    };

	    this._addEndEventListener(node, complete);

	    this.setState({
	      collapsing: true
	    });
	  },

	  _handleCollapse: function _handleCollapse() {
	    var _this2 = this;

	    var node = this.getCollapsibleDOMNode();

	    var complete = function complete() {
	      _this2._removeEndEventListener(node, complete);
	      _this2.setState({
	        collapsing: false
	      });
	    };

	    this._addEndEventListener(node, complete);

	    this.setState({
	      collapsing: true
	    });
	  },

	  // helps enable test stubs
	  _addEndEventListener: function _addEndEventListener(node, complete) {
	    _utilsTransitionEvents2['default'].addEndEventListener(node, complete);
	  },

	  // helps enable test stubs
	  _removeEndEventListener: function _removeEndEventListener(node, complete) {
	    _utilsTransitionEvents2['default'].removeEndEventListener(node, complete);
	  },

	  dimension: function dimension() {
	    if (typeof this.getCollapsableDimension === 'function') {
	      (0, _utilsDeprecationWarning2['default'])('CollapsableMixin.getCollapsableDimension()', 'CollapsibleMixin.getCollapsibleDimension()', 'https://github.com/react-bootstrap/react-bootstrap/issues/425#issuecomment-97110963');
	      return this.getCollapsableDimension();
	    }

	    return typeof this.getCollapsibleDimension === 'function' ? this.getCollapsibleDimension() : 'height';
	  },

	  isExpanded: function isExpanded() {
	    return this.props.expanded != null ? this.props.expanded : this.state.expanded;
	  },

	  getCollapsibleClassSet: function getCollapsibleClassSet(className) {
	    var classes = {};

	    if (typeof className === 'string') {
	      className.split(' ').forEach(function (subClasses) {
	        if (subClasses) {
	          classes[subClasses] = true;
	        }
	      });
	    }

	    classes.collapsing = this.state.collapsing;
	    classes.collapse = !this.state.collapsing;
	    classes['in'] = this.isExpanded() && !this.state.collapsing;

	    return classes;
	  }
	};

	exports['default'] = CollapsibleMixin;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CollapsibleMixin.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains a modified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/addons/transitions/ReactTransitionEvents.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },

	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};

	var endEvents = [];

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}

	if (canUseDOM) {
	  detectEvents();
	}

	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var ReactTransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },

	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	exports['default'] = ReactTransitionEvents;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TransitionEvents.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = deprecationWarning;

	function deprecationWarning(oldname, newname, link) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (!window.console && typeof console.warn !== 'function') {
	      return;
	    }

	    var message = '' + oldname + ' is deprecated. Use ' + newname + ' instead.';
	    console.warn(message);

	    if (link) {
	      console.warn('You can read more about it here ' + link);
	    }
	  }
	}

	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "deprecationWarning.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = collapsable;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _deprecationWarning = __webpack_require__(28);

	var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

	function collapsable(props, propName, componentName) {
	  if (props[propName] !== undefined) {
	    (0, _deprecationWarning2['default'])('' + propName + ' in ' + componentName, 'collapsible', 'https://github.com/react-bootstrap/react-bootstrap/issues/425');
	  }
	  return _react2['default'].PropTypes.bool.call(null, props, propName, componentName);
	}

	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "deprecatedProperty.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap-modal");

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _marty = __webpack_require__(9);

	var _marty2 = _interopRequireDefault(_marty);

	/**
	* Used for creating pages which require authentication.
	*
	* Given a component and an array of allowedRoles:
	* Automatically redirects away if current user in LoginStore does not match any of the allowed roles
	*/

	exports['default'] = function (OriginalComponent, allowedRoles) {
	  var extendedComponent = (function (_React$Component) {
	    var _class = function extendedComponent() {
	      _classCallCheck(this, _class);

	      _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).apply(this, arguments);
	    };

	    _inherits(_class, _React$Component);

	    _createClass(_class, [{
	      key: 'componentWillMount',
	      value: function componentWillMount() {
	        if (!this.app.loginStore.isLoggedIn()) {
	          return this.app.navigationActionCreators.navigateToLogin();
	        }
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2['default'].createElement(OriginalComponent, this.props);
	      }
	    }]);

	    return _class;
	  })(_react2['default'].Component);

	  var container = _marty2['default'].createContainer(extendedComponent);
	  container.allowedRoles = allowedRoles;
	  return container;
	};

	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "authenticatedPage.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(18);

	var _marty = __webpack_require__(9);

	var _marty2 = _interopRequireDefault(_marty);

	var HomePage = (function (_React$Component) {
	  function HomePage() {
	    _classCallCheck(this, HomePage);

	    _get(Object.getPrototypeOf(HomePage.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _inherits(HomePage, _React$Component);

	  _createClass(HomePage, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'home' },
	        _react2['default'].createElement(
	          _reactBootstrap.PageHeader,
	          null,
	          'Home page!',
	          _react2['default'].createElement('br', null),
	          _react2['default'].createElement(
	            'small',
	            null,
	            'Welcome sir.'
	          ),
	          _react2['default'].createElement('br', null),
	          _react2['default'].createElement(
	            'h5',
	            null,
	            'Marty version is: ',
	            _marty2['default'].version
	          )
	        )
	      );
	    }
	  }]);

	  return HomePage;
	})(_react2['default'].Component);

	HomePage.propTypes = {};

	exports['default'] = HomePage;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "home.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';
	var React = __webpack_require__(14);

	var _require = __webpack_require__(18);

	var PageHeader = _require.PageHeader;

	var About = React.createClass({
		displayName: 'About Component',
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'about' },
				React.createElement(
					PageHeader,
					null,
					'About page! This is our about page sir'
				)
			);
		}
	});

	module.exports = About;

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "about.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';
	var React = __webpack_require__(14);

	var PageNotFound = React.createClass({
		displayName: 'PageNotFound Component',
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'NotFound' },
				React.createElement(
					'h1',
					{ ref: 'title' },
					'Sorry this page could not be found!'
				)
			);
		}
	});

	module.exports = PageNotFound;

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "notfound.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./actions/loginActionCreators": 36,
		"./actions/loginActionCreators.js": 36,
		"./actions/navigationActionCreators": 41,
		"./actions/navigationActionCreators.js": 41,
		"./queries/loginQueries": 43,
		"./queries/loginQueries.js": 43,
		"./sources/localStorage": 44,
		"./sources/localStorage.js": 44,
		"./sources/session": 45,
		"./sources/session.js": 45,
		"./sources/usersApi": 39,
		"./sources/usersApi.js": 39,
		"./stores/loginStore": 46,
		"./stores/loginStore.js": 46
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 35;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _lodash = __webpack_require__(37);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _marty = __webpack_require__(9);

	var _marty2 = _interopRequireDefault(_marty);

	var _constantsLoginConstants = __webpack_require__(38);

	var _constantsLoginConstants2 = _interopRequireDefault(_constantsLoginConstants);

	var _sourcesUsersApi = __webpack_require__(39);

	var _sourcesUsersApi2 = _interopRequireDefault(_sourcesUsersApi);

	var LoginActionCreators = (function (_Marty$ActionCreators) {
	  function LoginActionCreators() {
	    _classCallCheck(this, LoginActionCreators);

	    _get(Object.getPrototypeOf(LoginActionCreators.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _inherits(LoginActionCreators, _Marty$ActionCreators);

	  _createClass(LoginActionCreators, [{
	    key: 'attemptLogin',
	    value: function attemptLogin(username, password) {
	      var _this = this;

	      var rememberMe = arguments[2] === undefined ? false : arguments[2];

	      _sourcesUsersApi2['default'].login(username, password).then(function (res) {
	        if (res.status === 200) {
	          _this.dispatch(_constantsLoginConstants2['default'].RECEIVE_TOKEN, res.body.token);
	          _this.dispatch(_constantsLoginConstants2['default'].RECEIVE_USER, res.body.user);
	          _this.loggedIn(res.body.user);
	          if (rememberMe) {
	            _this.dispatch(_constantsLoginConstants2['default'].REMEMBER_ME);
	          }
	        } else {
	          _this.dispatch(_constantsLoginConstants2['default'].LOGIN_FAILED, res.body.exception);
	        }
	      });
	    }
	  }, {
	    key: 'loggedIn',
	    value: function loggedIn(user) {
	      if (Router.getCurrentPath() === '/login') {
	        this.app.navigationActionCreators.navigateHome();
	      }

	      this.dispatch(_constantsLoginConstants2['default'].LOGGED_IN, user);
	    }
	  }, {
	    key: 'attemptReAuth',
	    value: function attemptReAuth() {
	      var _this2 = this;

	      if (this.app.loginQueries.getTokenFromStorage()) {
	        this.app.loginQueries.getUser().then(function (user) {
	          return _this2.loggedIn(user);
	        });
	      }
	    }
	  }, {
	    key: 'logout',
	    value: function logout() {
	      this.dispatch(_constantsLoginConstants2['default'].LOGGED_OUT);
	      console.log('logout');
	      this.app.navigationActionCreators.navigateToLogin();
	    }
	  }]);

	  return LoginActionCreators;
	})(_marty2['default'].ActionCreators);

	exports['default'] = LoginActionCreators;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "loginActionCreators.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _marty = __webpack_require__(9);

	var _marty2 = _interopRequireDefault(_marty);

	exports['default'] = _marty2['default'].createConstants(['LOGGED_IN', 'LOGGED_OUT', 'LOGIN_FAILED', 'RECEIVE_TOKEN', 'RECEIVE_USER', 'RECEIVE_USER_FAILED', 'REMEMBER_ME']);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "loginConstants.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _marty = __webpack_require__(9);

	var _marty2 = _interopRequireDefault(_marty);

	var _util = __webpack_require__(40);

	var _configJson = __webpack_require__(5);

	var _configJson2 = _interopRequireDefault(_configJson);

	var base = _configJson2['default'].API.ROOT;
	var endpoint = base + 'users';

	function handleRes(res) {
	  var json = res.json();
	  if (res.ok) return json;
	  throw new Error('Error in response', json, res);
	}

	var UserHttpAPI = (function (_Marty$HttpStateSource) {
	  function UserHttpAPI() {
	    _classCallCheck(this, UserHttpAPI);

	    _get(Object.getPrototypeOf(UserHttpAPI.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _inherits(UserHttpAPI, _Marty$HttpStateSource);

	  _createClass(UserHttpAPI, [{
	    key: 'login',
	    value: function login(email, password) {
	      var url = (0, _util.format)(endpoint + '/login');
	      return this.post({
	        url: url,
	        body: {
	          email: email,
	          password: password
	        }
	      }).then(handleRes);
	    }
	  }, {
	    key: 'getSelf',
	    value: function getSelf() {
	      return this.get(endpoint + '/self').then(handleRes);
	    }
	  }]);

	  return UserHttpAPI;
	})(_marty2['default'].HttpStateSource);

	exports['default'] = UserHttpAPI;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "usersApi.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = require("util");

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _marty = __webpack_require__(9);

	var _marty2 = _interopRequireDefault(_marty);

	var _constantsNavigationConstants = __webpack_require__(42);

	var _constantsNavigationConstants2 = _interopRequireDefault(_constantsNavigationConstants);

	var NavigationActionCreators = (function (_Marty$ActionCreators) {
	  function NavigationActionCreators() {
	    _classCallCheck(this, NavigationActionCreators);

	    _get(Object.getPrototypeOf(NavigationActionCreators.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _inherits(NavigationActionCreators, _Marty$ActionCreators);

	  _createClass(NavigationActionCreators, [{
	    key: 'navigateHome',
	    value: function navigateHome() {
	      this.navigateTo('home');
	    }
	  }, {
	    key: 'navigateToLogin',
	    value: function navigateToLogin() {
	      this.navigateTo('login');
	    }
	  }, {
	    key: 'changeRoute',
	    value: function changeRoute(state) {
	      this.dispatch(_constantsNavigationConstants2['default'].CHANGE_ROUTE, state);

	      if (state.path === '/logout') {
	        this.app.loginActionCreators.logout();
	      }
	    }
	  }, {
	    key: 'navigateTo',
	    value: function navigateTo(route) {
	      var params = arguments[1] === undefined ? {} : arguments[1];

	      console.log('navigate to', route, params);
	      this.app.router.transitionTo(route, params);
	    }
	  }]);

	  return NavigationActionCreators;
	})(_marty2['default'].ActionCreators);

	exports['default'] = NavigationActionCreators;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "navigationActionCreators.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _marty = __webpack_require__(9);

	var _marty2 = _interopRequireDefault(_marty);

	exports['default'] = _marty2['default'].createConstants(['CHANGE_ROUTE']);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "navigationConstants.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _marty = __webpack_require__(9);

	var _marty2 = _interopRequireDefault(_marty);

	var _constantsLoginConstants = __webpack_require__(38);

	var _constantsLoginConstants2 = _interopRequireDefault(_constantsLoginConstants);

	var LoginQueries = (function (_Marty$Queries) {
	  function LoginQueries() {
	    _classCallCheck(this, LoginQueries);

	    _get(Object.getPrototypeOf(LoginQueries.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _inherits(LoginQueries, _Marty$Queries);

	  _createClass(LoginQueries, [{
	    key: 'getTokenFromStorage',
	    value: function getTokenFromStorage() {
	      var token = this.app.session.getToken() || this.app.localStorage.getToken();
	      if (token) {
	        this.dispatch(_constantsLoginConstants2['default'].RECEIVE_TOKEN, token);
	        return token;
	      }
	    }
	  }, {
	    key: 'getUser',
	    value: function getUser() {
	      var _this = this;

	      return this.app.userApi.getSelf().then(function (user) {
	        _this.dispatch(_constantsLoginConstants2['default'].RECEIVE_USER, user);
	        return user;
	      }, function (err) {
	        return _this.dispatch(_constantsLoginConstants2['default'].RECEIVE_USER_FAILED);
	      });
	    }
	  }]);

	  return LoginQueries;
	})(_marty2['default'].Queries);

	exports['default'] = LoginQueries;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "loginQueries.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _marty = __webpack_require__(9);

	var _marty2 = _interopRequireDefault(_marty);

	var LocalStorage = (function (_Marty$LocalStorageStateSource) {
	  function LocalStorage() {
	    _classCallCheck(this, LocalStorage);

	    _get(Object.getPrototypeOf(LocalStorage.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _inherits(LocalStorage, _Marty$LocalStorageStateSource);

	  _createClass(LocalStorage, [{
	    key: 'setToken',
	    value: function setToken(token) {
	      this.set('token', token);
	    }
	  }, {
	    key: 'getToken',
	    value: function getToken() {
	      return this.get('token');
	    }
	  }, {
	    key: 'logout',
	    value: function logout() {
	      this.clear('token');
	    }
	  }, {
	    key: 'clear',
	    value: function clear(key) {
	      this.storage.clear(key);
	    }
	  }]);

	  return LocalStorage;
	})(_marty2['default'].LocalStorageStateSource);

	exports['default'] = LocalStorage;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "localStorage.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _marty = __webpack_require__(9);

	var _marty2 = _interopRequireDefault(_marty);

	var Session = (function (_Marty$SessionStorageStateSource) {
	  function Session() {
	    _classCallCheck(this, Session);

	    _get(Object.getPrototypeOf(Session.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _inherits(Session, _Marty$SessionStorageStateSource);

	  _createClass(Session, [{
	    key: 'setToken',
	    value: function setToken(token) {
	      this.set('token', token);
	    }
	  }, {
	    key: 'getToken',
	    value: function getToken() {
	      return this.get('token');
	    }
	  }, {
	    key: 'logout',
	    value: function logout() {
	      this.clear('token');
	    }
	  }, {
	    key: 'clear',
	    value: function clear(key) {
	      this.storage.clear(key);
	    }
	  }]);

	  return Session;
	})(_marty2['default'].SessionStorageStateSource);

	exports['default'] = Session;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "session.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _lodash = __webpack_require__(37);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _marty = __webpack_require__(9);

	var _marty2 = _interopRequireDefault(_marty);

	var _constantsLoginConstants = __webpack_require__(38);

	var _constantsLoginConstants2 = _interopRequireDefault(_constantsLoginConstants);

	var LoginStore = (function (_Marty$Store) {
	  function LoginStore(options) {
	    _classCallCheck(this, LoginStore);

	    _get(Object.getPrototypeOf(LoginStore.prototype), 'constructor', this).call(this, options);

	    this.state = {
	      error: null,
	      user: false,
	      token: false
	    };

	    this.handlers = {
	      loginFailed: _constantsLoginConstants2['default'].LOGIN_FAILED,
	      gotToken: _constantsLoginConstants2['default'].RECEIVE_TOKEN,
	      gotUser: _constantsLoginConstants2['default'].RECEIVE_USER,
	      onLoggedIn: _constantsLoginConstants2['default'].LOGGED_IN,
	      onLoggedOut: _constantsLoginConstants2['default'].LOGGED_OUT,
	      rememberMe: _constantsLoginConstants2['default'].REMEMBER_ME
	    };
	  }

	  _inherits(LoginStore, _Marty$Store);

	  _createClass(LoginStore, [{
	    key: 'loginFailed',
	    value: function loginFailed(exception) {
	      this.setState({ error: exception });
	    }
	  }, {
	    key: 'rememberMe',

	    /**
	    * Remembers a user for a longer period than the this.app.session
	    */
	    value: function rememberMe() {
	      this.app.localStorage.setToken(this.state.token);
	    }
	  }, {
	    key: 'gotToken',
	    value: function gotToken(token) {
	      this.app.session.setToken(token);
	      this.setState({ token: token });
	    }
	  }, {
	    key: 'gotUser',
	    value: function gotUser(user) {
	      this.setState({ user: user });
	    }
	  }, {
	    key: 'onLoggedIn',
	    value: function onLoggedIn() {
	      console.log('login successful');

	      this.setState({ error: null });
	    }
	  }, {
	    key: 'onLoggedOut',
	    value: function onLoggedOut() {
	      console.log('loggedOut');

	      this.app.session.logout();
	      this.app.localStorage.logout();

	      this.setState({
	        token: null,
	        user: null
	      });
	    }
	  }, {
	    key: 'getUser',
	    value: function getUser() {
	      return this.fetch({
	        id: 'get-user',
	        locally: function locally() {
	          if (this.state.user) {
	            return this.state.user;
	          }
	        },
	        remotely: function remotely() {
	          return this.app.loginQueries['for'](this).getUser();
	        }
	      });
	    }
	  }, {
	    key: 'isLoggedIn',
	    value: function isLoggedIn() {
	      return !!this.state.user;
	    }
	  }, {
	    key: 'getError',
	    value: function getError() {
	      return this.state.error;
	    }
	  }, {
	    key: 'getToken',
	    value: function getToken() {
	      return this.state.token;
	    }
	  }]);

	  return LoginStore;
	})(_marty2['default'].Store);

	exports['default'] = LoginStore;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "loginStore.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./hooks/httpHooks": 48,
		"./hooks/httpHooks.js": 48
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 47;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _marty = __webpack_require__(9);

	var _marty2 = _interopRequireDefault(_marty);

	var _storesLoginStore = __webpack_require__(46);

	var _storesLoginStore2 = _interopRequireDefault(_storesLoginStore);

	var _configJson = __webpack_require__(5);

	var _configJson2 = _interopRequireDefault(_configJson);

	function createAuthHeader(token) {
	  var scheme = _configJson2['default'].API.AUTH_SCHEME;
	  return scheme + ' token=' + token;
	};

	_marty2['default'].HttpStateSource.addHook({
	  id: 'addToken',

	  before: function before(req) {
	    var token = this.app.loginStore.getToken();
	    if (token) {
	      req.headers['Authorization'] = createAuthHeader(token);
	    }
	  }
	});

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "httpHooks.js" + ": " + err.message); } }); } } })(); }

/***/ }
/******/ ]);