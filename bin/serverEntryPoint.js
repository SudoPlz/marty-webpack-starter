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
	var express = __webpack_require__(7);
	var path = __webpack_require__(1);
	var logger = __webpack_require__(2);
	var bodyParser = __webpack_require__(3);
	var configFile = __webpack_require__(4);
	var proxy = __webpack_require__(5);
	var url = __webpack_require__(6);
	var morgan = __webpack_require__(2);
	var bodyParser = __webpack_require__(3);
	var favicon = __webpack_require__(8);

	var isProduction = process.env.NODE_ENV === 'production';
	//var publicPath = path.join(__dirname, '..','..', 'assets');

	// -------- my proxy----------------------
	var app = express();
	// proxy the request for static assets

	// now requests to '/assets' are proxied to 'http://localhost:8081/assets'
	app.use('/assets', proxy(url.parse('http://localhost:8081/assets')));

	app.use(favicon(path.join('assets', 'favicon.ico')));

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

	//app.use(morgan('dev'));
	//app.use(bodyParser.json());
	app.use(__webpack_require__(9)({
	    routes: __webpack_require__(10),
	    application: __webpack_require__(42),
	    rendered: function rendered(result) {
	        console.log('Rendered ' + result.req.url);
	    }
	}));

	//console.log('Required ejs file: ' + require('./views/index.ejs'));
	//app.get('/', function(req, res) {
	//    //res.sendFile(__dirname + '/index.html');
	//      res.render('index', {body: 'YO bro', state:'ok'});
	//});

	var server = app.listen(app.get('port'), function () {
	    console.info('Express server started at http://localhost:' + app.get('port'));
	});

	//var webpack = require('webpack');
	//var WebpackDevServer = require('webpack-dev-server');
	//var webpackConfig = require('../../webpack.browser.config');
	//if(!isProduction){
	//    //----- my-webpack-dev-server------------------
	//    var webpackServer = new WebpackDevServer(webpack(webpackConfig), {
	//        hot: true,
	//        inline: false,
	//        quiet: true,
	//        noInfo: false,
	//        headers: { 'Access-Control-Allow-Origin': '*' },
	//        publicPath: '/assets/',
	//        historyApiFallback: false,
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

	module.exports = require("path");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("morgan");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
		"APP_NAME": "Marty webpack",
		"API": {
			"ROOT": "http://localhost:1337",
			"AUTH_SCHEME": "my-auth-scheme"
		},
		"DEV_PORT": 8080
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("proxy-middleware");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("url");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("serve-favicon");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("marty-express");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(14);

	var _layout = __webpack_require__(15);

	var _layout2 = _interopRequireDefault(_layout);

	var _componentsAuthenticatedPage = __webpack_require__(33);

	var _componentsAuthenticatedPage2 = _interopRequireDefault(_componentsAuthenticatedPage);

	var _pagesLogout = __webpack_require__(34);

	var _pagesLogout2 = _interopRequireDefault(_pagesLogout);

	var _pagesHome = __webpack_require__(35);

	var _pagesHome2 = _interopRequireDefault(_pagesHome);

	var _pagesHome3 = _interopRequireDefault(_pagesHome);

	var _pagesAbout = __webpack_require__(11);

	var _pagesAbout2 = _interopRequireDefault(_pagesAbout);

	var _pagesNotfound = __webpack_require__(36);

	var _pagesNotfound2 = _interopRequireDefault(_pagesNotfound);

	var _pagesRegister = __webpack_require__(37);

	var _pagesRegister2 = _interopRequireDefault(_pagesRegister);

	var _pagesVerifyJs = __webpack_require__(38);

	var _pagesVerifyJs2 = _interopRequireDefault(_pagesVerifyJs);

	var _pagesProfileJs = __webpack_require__(40);

	var _pagesProfileJs2 = _interopRequireDefault(_pagesProfileJs);

	var _pagesLoginJs = __webpack_require__(41);

	var _pagesLoginJs2 = _interopRequireDefault(_pagesLoginJs);

	var userRole = 'user',
	    publicRole = 'public';
	exports['default'] = _react2['default'].createElement(
	    _reactRouter.Route,
	    { name: 'public', path: '/', handler: _layout2['default'] },
	    _react2['default'].createElement(_reactRouter.DefaultRoute, { handler: _pagesHome3['default'] }),
	    _react2['default'].createElement(_reactRouter.NotFoundRoute, { handler: _pagesNotfound2['default'] }),
	    _react2['default'].createElement(_reactRouter.Route, { name: 'home', path: '/', handler: _pagesHome3['default'] }),
	    _react2['default'].createElement(_reactRouter.Route, { name: 'about', path: '/about', handler: _pagesAbout2['default'] }),
	    _react2['default'].createElement(_reactRouter.Route, { name: 'register', path: '/register', handler: _pagesRegister2['default'] }),
	    _react2['default'].createElement(_reactRouter.Route, { name: 'login', path: '/login', handler: (0, _componentsAuthenticatedPage2['default'])(_pagesLoginJs2['default'], [publicRole]) }),
	    _react2['default'].createElement(_reactRouter.Route, { name: 'verify', path: '/verification/:username/:verificationId', handler: _pagesVerifyJs2['default'] }),
	    _react2['default'].createElement(_reactRouter.Route, { name: 'profile', path: '/profile', handler: (0, _componentsAuthenticatedPage2['default'])(_pagesProfileJs2['default'], [userRole]) }),
	    _react2['default'].createElement(_reactRouter.Route, { name: 'logout', path: '/logout', handler: (0, _componentsAuthenticatedPage2['default'])(_pagesLogout2['default'], [userRole]) })
	);

	//<Route name="profile" path="/profile" handler={AuthenticatedPage(Profile)} />
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "routes.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';
	var React = __webpack_require__(12);

	var _require = __webpack_require__(13);

	var PageHeader = _require.PageHeader;

	var AboutPage = React.createClass({
		displayName: 'AboutPage Component',
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

	module.exports = AboutPage;

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "about.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("react-router");

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

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(14);

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

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(13);

	var _reactRouterBootstrap = __webpack_require__(32);

	var _loginFormModalLogin = __webpack_require__(18);

	var _loginFormModalLogin2 = _interopRequireDefault(_loginFormModalLogin);

	var _marty = __webpack_require__(19);

	var _marty2 = _interopRequireDefault(_marty);

	var _lodash = __webpack_require__(31);

	var _lodash2 = _interopRequireDefault(_lodash);

	var MyNavbar = (function (_React$Component) {
	    function MyNavbar(props) {
	        _classCallCheck(this, MyNavbar);

	        _get(Object.getPrototypeOf(MyNavbar.prototype), 'constructor', this).call(this, props);
	        //this.render = this.render.bind(this);
	        this.state = { isLoginModalOpen: false };

	        this.openLoginModal = _lodash2['default'].bind(this.openLoginModal, this);
	        this.closeLoginModal = _lodash2['default'].bind(this.closeLoginModal, this);
	        this.attemptUserLogout = _lodash2['default'].bind(this.attemptUserLogout, this);
	        this.isLoggedIn = _lodash2['default'].bind(this.isLoggedIn, this);
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
	                    { eventKey: 3, title: this.props.user ? this.props.user.username : 'User' },
	                    _react2['default'].createElement(
	                        _reactRouterBootstrap.MenuItemLink,
	                        { to: 'profile' },
	                        'Profile'
	                    ),
	                    _react2['default'].createElement(_reactBootstrap.MenuItem, { divider: true }),
	                    _react2['default'].createElement(
	                        _reactBootstrap.NavItem,
	                        { onClick: this.attemptUserLogout },
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
	                    _reactRouterBootstrap.NavItemLink,
	                    { to: 'register', params: { someparam: 'hello' } },
	                    'Register'
	                )
	            );
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(_loginFormModalLogin2['default'], { show: this.props.user ? false : this.state.isLoginModalOpen, onHide: this.closeLoginModal }),
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
	                        this.props.user ? loggedInNavBar : loggedOutNavBar
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'isLoggedIn',
	        value: function isLoggedIn() {
	            return !!this.props.user;
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
	    }, {
	        key: 'attemptUserLogout',
	        value: function attemptUserLogout() {
	            this.app.loginActionCreators.attemptLogout();
	        }
	    }]);

	    return MyNavbar;
	})(_react2['default'].Component);

	MyNavbar.propTypes = {
	    isLoginModalOpen: _react2['default'].PropTypes.bool
	};

	exports['default'] = _marty2['default'].createContainer(MyNavbar, {
	    listenTo: ['loginStore'],
	    fetch: {
	        user: function user() {
	            var usr = this.app.loginStore.getUser();
	            return !usr ? false : usr;
	        }
	    }
	});
	module.exports = exports['default'];
	/* This is the eventKey referenced */

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "navbar.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 18 */
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

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _marty = __webpack_require__(19);

	var _marty2 = _interopRequireDefault(_marty);

	var _reactBootstrapLibPanel = __webpack_require__(20);

	var _reactBootstrapLibPanel2 = _interopRequireDefault(_reactBootstrapLibPanel);

	var _reactBootstrap = __webpack_require__(13);

	var _reactBootstrapModal = __webpack_require__(29);

	var _reactBootstrapModal2 = _interopRequireDefault(_reactBootstrapModal);

	var _validator = __webpack_require__(30);

	var _validator2 = _interopRequireDefault(_validator);

	var _lodash = __webpack_require__(31);

	var _lodash2 = _interopRequireDefault(_lodash);

	var ModalLogin = (function (_React$Component) {
	    function ModalLogin(props, context) {
	        _classCallCheck(this, ModalLogin);

	        _get(Object.getPrototypeOf(ModalLogin.prototype), 'constructor', this).call(this, props, context);
	        this.onKeyDown = _lodash2['default'].bind(this.onKeyDown, this);
	        this.handleLogin = _lodash2['default'].bind(this.handleLogin, this);
	        this.onDismiss = _lodash2['default'].bind(this.onDismiss, this);
	        this.onShow = _lodash2['default'].bind(this.onShow, this);
	    }

	    _inherits(ModalLogin, _React$Component);

	    _createClass(ModalLogin, [{
	        key: 'handleLogin',
	        value: function handleLogin(event) {
	            var payload = {
	                username: this.refs.username.getValue(),
	                password: this.refs.password.getValue(),
	                rememberMe: this.refs.rememberMe.checked
	            };

	            //console.log('Trying to log in with: '+payload.username + payload.password);
	            //TODO: Add remember me on the parameters below
	            this.app.loginActionCreators.attemptLogin(payload);
	        }
	    }, {
	        key: 'render',

	        //logout: function(e) {
	        //    e.preventDefault();
	        //    //SessionActionCreators.logout();
	        //    //TODO: Do something on logout
	        //},

	        //handleUsernameChange(event){
	        //    this.state.curUsernameUsed = event.target.value;
	        //    var erMsg = '';
	        //
	        //    if(!validator.isLength(this.state.curUsernameUsed,6,32)){
	        //        erMsg = 'Username length should be 6-32 characters';
	        //    }
	        //
	        //    this.updateField(FIELD_KEYS.USERNAME, erMsg);
	        //}
	        //
	        //handlePasswordChange(event){
	        //    this.state.curPasswordUsed = event.target.value;
	        //    var erMsg = '';
	        //
	        //    if(!validator.isLength(this.state.curPasswordUsed,6,32)){
	        //        erMsg =  'Password length should be 6-32 characters';
	        //    }
	        //
	        //    this.updateField(FIELD_KEYS.PASSWORD, erMsg);
	        //}

	        //this.props.isLoggedIn?false:
	        value: function render() {
	            //console.log('show is : '+this.props.show);
	            //autoFocus
	            return _react2['default'].createElement(
	                _reactBootstrapModal2['default'],
	                {
	                    show: this.props.show,
	                    onTransitionedIn: this.onShow,
	                    onHide: this.onDismiss,
	                    //backdrop={'static'}
	                    animate: true,
	                    keyboard: true,
	                    autoFocus: false
	                },
	                _react2['default'].createElement(
	                    _reactBootstrapModal2['default'].Header,
	                    { closeButton: true },
	                    _react2['default'].createElement(
	                        _reactBootstrapModal2['default'].Title,
	                        { id: 'ModalHeader' },
	                        'Please log in. '
	                    )
	                ),
	                _react2['default'].createElement(
	                    _reactBootstrapModal2['default'].Body,
	                    null,
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'loginErrorLbl' },
	                        this.props.error ? _react2['default'].createElement(
	                            _reactBootstrap.Alert,
	                            { bsStyle: 'danger' },
	                            _react2['default'].createElement(
	                                'strong',
	                                null,
	                                this.props.error
	                            )
	                        ) : ''
	                    ),
	                    _react2['default'].createElement(_reactBootstrap.Input, { name: 'username', ref: 'username', type: 'username', placeholder: 'Username or Email',
	                        required: true, minLength: 6, defaultValue: this.app.localStorage.getUsername() ? this.app.localStorage.getUsername() : null }),
	                    _react2['default'].createElement(_reactBootstrap.Input, { name: 'password', ref: 'password', type: 'password', placeholder: 'Password',
	                        required: true, minLength: 6, onKeyDown: this.onKeyDown })
	                ),
	                _react2['default'].createElement(
	                    _reactBootstrapModal2['default'].Footer,
	                    null,
	                    _react2['default'].createElement(
	                        _reactBootstrap.Row,
	                        { className: 'loginBtns' },
	                        _react2['default'].createElement(
	                            _reactBootstrap.Col,
	                            { xs: 5, md: 8 },
	                            _react2['default'].createElement(_reactBootstrap.Input, { type: 'checkbox', defaultChecked: true, label: 'Remember me', ref: 'rememberMe' })
	                        ),
	                        _react2['default'].createElement(
	                            _reactBootstrap.Col,
	                            { xs: 12, md: 4 },
	                            _react2['default'].createElement(
	                                _reactBootstrap.Col,
	                                { xs: 3, md: 6 },
	                                _react2['default'].createElement(
	                                    _reactBootstrapModal2['default'].Dismiss,
	                                    { className: 'btn btn-default' },
	                                    'Cancel'
	                                )
	                            ),
	                            _react2['default'].createElement(
	                                _reactBootstrap.Col,
	                                { xs: 3, md: 6 },
	                                _react2['default'].createElement(
	                                    _reactBootstrap.Button,
	                                    { onClick: this.handleLogin, type: '#', bsStyle: 'success' },
	                                    'Login'
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'onKeyDown',

	        //onChange={(e)=>{console.log(e.target.checked)}} //for checkBox

	        value: function onKeyDown(e) {
	            if (e.keyCode === 13) {
	                this.handleLogin();
	            }
	        }
	    }, {
	        key: 'onShow',
	        value: function onShow(e) {
	            if (this.refs.username.getValue() && this.refs.username.getValue().length > 0) {
	                this.refs.password.getInputDOMNode().focus();
	            } else {
	                this.refs.username.getInputDOMNode().focus();
	            }
	        }
	    }, {
	        key: 'onDismiss',
	        value: function onDismiss(e) {
	            this.props.onHide();
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
	        //,isLoggedIn(){
	        //    return this.app.loginStore.isLoggedIn();
	        //}
	    }
	});
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "modalLogin.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("marty");

/***/ },
/* 20 */
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

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(21);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _BootstrapMixin = __webpack_require__(22);

	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

	var _CollapsibleMixin = __webpack_require__(25);

	var _CollapsibleMixin2 = _interopRequireDefault(_CollapsibleMixin);

	var _utilsDeprecatedProperty = __webpack_require__(28);

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
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _styleMaps = __webpack_require__(23);

	var _styleMaps2 = _interopRequireDefault(_styleMaps);

	var _utilsCustomPropTypes = __webpack_require__(24);

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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _utilsTransitionEvents = __webpack_require__(26);

	var _utilsTransitionEvents2 = _interopRequireDefault(_utilsTransitionEvents);

	var _utilsDeprecationWarning = __webpack_require__(27);

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
/* 26 */
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
/* 27 */
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
/* 28 */
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

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _deprecationWarning = __webpack_require__(27);

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
/* 29 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap-modal");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("validator");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("react-router-bootstrap");

/***/ },
/* 33 */
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

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _marty = __webpack_require__(19);

	var _marty2 = _interopRequireDefault(_marty);

	var _lodash = __webpack_require__(31);

	var _lodash2 = _interopRequireDefault(_lodash);

	/**
	 * Used for creating pages which require authentication.
	 *
	 * Given a component and an array of allowedRoles:
	 * Automatically redirects away if current user in LoginStore does not match any of the allowed roles
	 */
	//public user admin

	//var availableRoles = ['public', 'user', 'admin'];

	exports['default'] = function (OriginalComponent, allowedRoles) {
	    var extendedComponent = (function (_React$Component) {
	        var _class = function extendedComponent(props) {
	            _classCallCheck(this, _class);

	            _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).call(this, props);
	            this.checkRoleCompability = _lodash2['default'].bind(this.checkRoleCompability, this);
	        };

	        _inherits(_class, _React$Component);

	        _createClass(_class, [{
	            key: 'checkRoleCompability',
	            value: function checkRoleCompability() {
	                if (_marty2['default'].isBrowser) {
	                    var curRole = !!this.props.user ? 'user' : 'public';
	                    //curRole = this.props.isAdmin?'admin':curRole;

	                    console.log('Cur role: ' + curRole);
	                    var allowed = _lodash2['default'].findIndex(allowedRoles, function (chr) {
	                        return chr == curRole;
	                    }) == -1 ? false : true; //if -1 then curRole NOT allowed, else allowed
	                    console.log('Allowed? : ' + allowed);
	                    if (!allowed && curRole == 'public') {
	                        console.log('Navigate to login');
	                        this.app.navigationActionCreators.navigateToLogin();
	                    } else if (!allowed && curRole == 'user') {
	                        console.log('Navigate to home');
	                        this.app.navigationActionCreators.navigateHome();
	                    } else {
	                        console.log('No need to do anything, user allowed.');
	                    }
	                }
	            }
	        }, {
	            key: 'componentDidMount',
	            value: function componentDidMount() {
	                //console.log('Did mount...!');
	                this.checkRoleCompability();
	            }
	        }, {
	            key: 'componentWillMount',
	            value: function componentWillMount() {}
	        }, {
	            key: 'render',

	            //isLoggedIn(){
	            //    console.log('User: '+this.props.user);
	            //    return !!this.props.user;
	            //}

	            value: function render() {
	                return _react2['default'].createElement(OriginalComponent, this.props);
	            }
	        }]);

	        return _class;
	    })(_react2['default'].Component);

	    var container = _marty2['default'].createContainer(extendedComponent, {
	        listenTo: ['loginStore'],
	        fetch: {

	            //isAdmin(){
	            //    return this.app.loginStore.getUser().role=='admin';
	            //},

	            user: function user() {
	                return this.app.loginStore.getUser();
	            }
	        }
	    });
	    container.allowedRoles = allowedRoles;
	    return container;
	};

	module.exports = exports['default'];

	////if(!this.app.loginStore.isLoggedIn()){
	////    return this.app.navigationActionCreators.navigateToLogin();
	////}

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "authenticatedPage.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 34 */
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

	var _react = __webpack_require__(12);

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
/* 35 */
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

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(13);

	var _marty = __webpack_require__(19);

	var _marty2 = _interopRequireDefault(_marty);

	var _lodash = __webpack_require__(31);

	var _lodash2 = _interopRequireDefault(_lodash);

	var HomePage = (function (_React$Component) {
	    function HomePage(props, context) {
	        _classCallCheck(this, HomePage);

	        _get(Object.getPrototypeOf(HomePage.prototype), 'constructor', this).call(this, props, context);
	        //this.saveToStorage = _.bind(this.saveToStorage, this);
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

	        //<Button bsStyle='success' onClick={this.saveToStorage}>Save to LocalStorage</Button>
	        //saveToStorage(e){
	        //    console.log('Saved');
	        //    if(Marty.isBrowser){
	        //      //console.log('Token set storage');
	        //        return  this.app.localStorage.setTest('TESTING 123');
	        //    }
	        //}

	    }]);

	    return HomePage;
	})(_react2['default'].Component);

	HomePage.propTypes = {};

	//export default Marty.createContainer(HomePage);
	exports['default'] = HomePage;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "home.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';
	var React = __webpack_require__(12);

	var NotFoundPage = React.createClass({
		displayName: 'NotFoundPage Component',
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

	module.exports = NotFoundPage;

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "notfound.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 37 */
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

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(13);

	var _marty = __webpack_require__(19);

	var _marty2 = _interopRequireDefault(_marty);

	var _validator = __webpack_require__(30);

	var _validator2 = _interopRequireDefault(_validator);

	var FIELD_KEYS = {
	    USERNAME: 0,
	    PASSWORD: 1,
	    PASSWORD_CONF: 2,
	    EMAIL: 3,
	    FIRST_NAME: 4,
	    LAST_NAME: 5
	};
	var TOTAL_SIGNUP_FIELDS = 6;

	var RegisterPage = (function (_React$Component) {
	    function RegisterPage(props, context) {
	        _classCallCheck(this, RegisterPage);

	        _get(Object.getPrototypeOf(RegisterPage.prototype), 'constructor', this).call(this, props, context);
	        //this.state.errorTxt = '';

	        this.state = {
	            isLoading: false,
	            fieldErrors: [],
	            submitBtnDisabled: true,
	            resetBtnDisabled: false,
	            curUsernameUsed: '',
	            curPasswordUsed: '',
	            noInputYet: true
	        };
	    }

	    _inherits(RegisterPage, _React$Component);

	    _createClass(RegisterPage, [{
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	            if (this.state.isLoading) {
	                if (!prevProps.error && this.props.error) {
	                    this.setState({ isLoading: false, submitBtnDisabled: !this.allFieldsAccepted(), resetBtnDisabled: false });
	                }
	                if (this.props.error && prevProps.error == this.props.error) {
	                    this.setState({ isLoading: false, submitBtnDisabled: !this.allFieldsAccepted(), resetBtnDisabled: false });
	                }
	            }
	        }
	    }, {
	        key: 'handleResetForms',
	        value: function handleResetForms() {
	            this.setState({
	                curUsernameUsed: '',
	                curPasswordUsed: '',
	                noInputYet: true,
	                fieldErrors: []
	            });
	        }
	    }, {
	        key: 'handleSubmit',
	        value: function handleSubmit(e) {

	            e.preventDefault();
	            var payload = {
	                email: this.refs.email.getValue(),
	                username: this.refs.username.getValue(),
	                password: this.refs.password.getValue(),
	                firstName: this.refs.firstName.getValue(),
	                lastName: this.refs.lastName.getValue()
	            };

	            this.app.registerStore.clearRegistErrors();

	            if (this.allFieldsAccepted()) {
	                this.setState({
	                    isLoading: true,
	                    submitBtnDisabled: true,
	                    resetBtnDisabled: true,
	                    //errorTxt:'',
	                    curUsernameUsed: '',
	                    curPasswordUsed: '',
	                    noInputYet: true
	                });

	                this.app.registerActionCreators.attemptRegister(payload);
	            }
	        }
	    }, {
	        key: 'handleUsernameChange',
	        value: function handleUsernameChange(event) {
	            this.state.curUsernameUsed = event.target.value;
	            var erMsg = '';
	            if (!this.passesOurCharWhitelist(this.state.curUsernameUsed)) {
	                erMsg = 'Allowed username characters are a-z, A-Z, 0-9, and !@#%&?+*^~-_.,().';
	            }
	            if (!_validator2['default'].isLength(this.state.curUsernameUsed, 6, 32)) {
	                erMsg = 'Username length should be 6-32 characters';
	            }
	            this.updateField(FIELD_KEYS.USERNAME, erMsg);
	        }
	    }, {
	        key: 'handlePasswordChange',
	        value: function handlePasswordChange(event) {
	            this.state.curPasswordUsed = event.target.value;
	            var erMsg = '';
	            if (!this.passesOurCharWhitelist(this.state.curPasswordUsed)) {
	                erMsg = 'Allowed password characters are a-z, A-Z, 0-9, and !@#%&?+*^~-_.,().';
	            }
	            if (!_validator2['default'].isLength(this.state.curPasswordUsed, 6, 32)) {
	                erMsg = 'Password length should be 6-32 characters';
	            }
	            if (this.state.curUsernameUsed == this.state.curPasswordUsed) {
	                erMsg = 'Username and password CANNOT be the same. Choose a different password please.';
	            }
	            this.updateField(FIELD_KEYS.PASSWORD, erMsg);
	        }
	    }, {
	        key: 'handlePasswordConfrimationChange',
	        value: function handlePasswordConfrimationChange(event) {
	            var curPassConf = event.target.value;
	            var erMsg = '';
	            if (this.state.curPasswordUsed != curPassConf) {
	                erMsg = 'Password and password confirmation don\'t match';
	            }
	            this.updateField(FIELD_KEYS.PASSWORD_CONF, erMsg);
	        }
	    }, {
	        key: 'handleEmailChange',
	        value: function handleEmailChange(event) {
	            var curEmail = event.target.value;
	            var erMsg = '';
	            if (!_validator2['default'].isEmail(curEmail) || !_validator2['default'].isLength(curEmail, 6, 64)) {
	                erMsg = 'Please provide us with a valid email 6-64 characters long.';
	            }
	            this.updateField(FIELD_KEYS.EMAIL, erMsg);
	        }
	    }, {
	        key: 'updateField',
	        value: function updateField(fieldName, errMessage) {
	            var fErs = this.state.fieldErrors;
	            fErs[fieldName] = errMessage;
	            this.setState({ fieldErrors: fErs, errors: '', submitBtnDisabled: !this.allFieldsAccepted(), noInputYet: false });
	        }
	    }, {
	        key: 'handleFirstNameChange',
	        value: function handleFirstNameChange(event) {

	            var curFirstName = event.target.value;
	            var erMsg = '';
	            if (!_validator2['default'].isLength(curFirstName, 2, 60)) {
	                erMsg = 'Please provide your real first name 2-60 characters long.';
	            }
	            this.updateField(FIELD_KEYS.FIRST_NAME, erMsg);
	        }
	    }, {
	        key: 'handleLastNameChange',
	        value: function handleLastNameChange(event) {
	            var curLastName = event.target.value;
	            var erMsg = '';
	            if (!_validator2['default'].isLength(curLastName, 3, 60)) {
	                erMsg = 'Please provide your real last name 3-60 characters long.';
	            }
	            this.updateField(FIELD_KEYS.LAST_NAME, erMsg);
	        }
	    }, {
	        key: 'passesOurCharWhitelist',
	        value: function passesOurCharWhitelist(str) {
	            return str.match(new RegExp(/(^[\w!@#%&\/(){}[\]=?+*^~\-_.:,]{1,32}$)/));
	        }
	    }, {
	        key: 'allFieldsAccepted',
	        value: function allFieldsAccepted() {
	            var i, len, field;
	            var accepted = true;
	            var arr = this.state.fieldErrors;
	            len = arr.length;
	            var keys = Object.keys(arr);
	            //console.log('Arr status: '+arr+ ' with length: '+len);
	            //console.log('Total fields: '+len);
	            if (len < TOTAL_SIGNUP_FIELDS) {
	                accepted = false;
	            } else {
	                for (i = 0; i < len; ++i) {
	                    if (i in arr) {
	                        field = arr[i];
	                        if (field != '') {
	                            accepted = false;
	                        }
	                    }
	                }
	            }
	            //console.log(accepted?'All fields OK':'Some fields need work');
	            return accepted;
	        }
	    }, {
	        key: 'getAppropriateStyle',
	        value: function getAppropriateStyle(fieldKey) {
	            var style = null;
	            //console.log('fielderrors for key: '+fieldKey+' is: '+this.state.fieldErrors[fieldKey]);
	            if (this.state.fieldErrors[fieldKey] != undefined) {
	                if (this.state.fieldErrors[fieldKey] == '') {
	                    style = 'success';
	                } else {
	                    style = 'error';
	                }
	            }
	            //console.log('getAppropriateStyle style: '+style);
	            return style;
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            return _react2['default'].createElement(
	                _reactBootstrap.Panel,
	                { header: 'Lets get you up and running:', bsStyle: 'success', className: 'register' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'registerErrorLbl' },
	                    this.props.error ? _react2['default'].createElement(
	                        _reactBootstrap.Alert,
	                        { bsStyle: 'danger' },
	                        _react2['default'].createElement(
	                            'strong',
	                            null,
	                            this.props.error
	                        )
	                    ) : ''
	                ),
	                _react2['default'].createElement(
	                    _reactBootstrap.Row,
	                    { className: 'nameinputs' },
	                    _react2['default'].createElement(
	                        _reactBootstrap.Col,
	                        { xs: 5 },
	                        _react2['default'].createElement(_reactBootstrap.Input, { type: 'text', placeholder: 'First name',
	                            label: 'First name', ref: 'firstName',
	                            onChange: this.handleFirstNameChange.bind(this),
	                            bsStyle: this.getAppropriateStyle(FIELD_KEYS.FIRST_NAME),
	                            help: this.state.fieldErrors[FIELD_KEYS.FIRST_NAME], hasFeedback: !this.state.noInputYet })
	                    ),
	                    _react2['default'].createElement(
	                        _reactBootstrap.Col,
	                        { xs: 7 },
	                        _react2['default'].createElement(_reactBootstrap.Input, { type: 'text', placeholder: 'Last name',
	                            label: 'Last name', ref: 'lastName',
	                            onChange: this.handleLastNameChange.bind(this),
	                            bsStyle: this.getAppropriateStyle(FIELD_KEYS.LAST_NAME),
	                            help: this.state.fieldErrors[FIELD_KEYS.LAST_NAME], hasFeedback: !this.state.noInputYet })
	                    )
	                ),
	                _react2['default'].createElement(_reactBootstrap.Input, { className: 'emailInput', type: 'email', label: 'Email Address', placeholder: 'Enter email', ref: 'email',
	                    onChange: this.handleEmailChange.bind(this),
	                    bsStyle: this.getAppropriateStyle(FIELD_KEYS.EMAIL),
	                    help: this.state.fieldErrors[FIELD_KEYS.EMAIL], hasFeedback: !this.state.noInputYet }),
	                _react2['default'].createElement(_reactBootstrap.Input, { className: 'usernameInput', type: 'text', label: 'Username', placeholder: 'Enter your username', ref: 'username',
	                    onChange: this.handleUsernameChange.bind(this),
	                    bsStyle: this.getAppropriateStyle(FIELD_KEYS.USERNAME),
	                    help: this.state.fieldErrors[FIELD_KEYS.USERNAME], hasFeedback: !this.state.noInputYet }),
	                _react2['default'].createElement(_reactBootstrap.Input, { className: 'passwordInput', type: 'password', label: 'Password', placeholder: 'Enter a password', ref: 'password',
	                    onChange: this.handlePasswordChange.bind(this),
	                    bsStyle: this.getAppropriateStyle(FIELD_KEYS.PASSWORD),
	                    help: this.state.fieldErrors[FIELD_KEYS.PASSWORD], hasFeedback: !this.state.noInputYet }),
	                _react2['default'].createElement(_reactBootstrap.Input, { className: 'passwordConfInput', type: 'password', label: 'Confirmation Password', placeholder: 'Re enter your password',
	                    onChange: this.handlePasswordConfrimationChange.bind(this),
	                    bsStyle: this.getAppropriateStyle(FIELD_KEYS.PASSWORD_CONF),
	                    help: this.state.fieldErrors[FIELD_KEYS.PASSWORD_CONF], hasFeedback: !this.state.noInputYet }),
	                _react2['default'].createElement(
	                    _reactBootstrap.Button,
	                    { type: 'submit', className: 'submitButton', onClick: this.handleSubmit.bind(this), disabled: this.state.submitBtnDisabled, bsStyle: 'success' },
	                    this.state.isLoading ? _react2['default'].createElement(
	                        'div',
	                        null,
	                        _react2['default'].createElement('span', { className: 'glyphicon glyphicon-refresh spinning' }),
	                        ' Loading...'
	                    ) : 'Submit'
	                ),
	                _react2['default'].createElement(
	                    _reactBootstrap.ButtonInput,
	                    { type: 'reset', className: 'resetButton', bsStyle: 'link', onClick: this.handleResetForms.bind(this), disabled: this.state.resetBtnDisabled },
	                    'Reset'
	                )
	            );

	            //if(this.props.registSuccess){
	            //    return (
	            //        <Panel header='Lets get you up and running:'  bsStyle='success' className='register' >
	            //            <h1>Thank you for signing up.</h1>
	            //            <br/>
	            //            <p>Check your mailbox for a verification mail.</p>
	            //        </Panel>
	            //    );
	            //}
	            //else{
	            //}
	        }
	    }]);

	    return RegisterPage;
	})(_react2['default'].Component);

	RegisterPage.propTypes = {};

	exports['default'] = _marty2['default'].createContainer(RegisterPage, {
	    listenTo: ['registerStore'],
	    fetch: {
	        error: function error() {
	            return this.app.registerStore.getRegistError();
	        }
	        //,
	        //registSuccess() {
	        //    return this.app.registerStore.didRegistrationSucceed();
	        //}
	    }

	});
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "register.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 38 */
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

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(13);

	var _lodash = __webpack_require__(31);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _marty = __webpack_require__(19);

	var _marty2 = _interopRequireDefault(_marty);

	var _reactLoader = __webpack_require__(39);

	var _reactLoader2 = _interopRequireDefault(_reactLoader);

	var VerifyPage = (function (_React$Component) {
	    function VerifyPage(props, context) {
	        _classCallCheck(this, VerifyPage);

	        _get(Object.getPrototypeOf(VerifyPage.prototype), 'constructor', this).call(this, props, context);

	        //this.render = _.bind(this.render, this);
	        this.handleAlertDismiss = _lodash2['default'].bind(this.handleAlertDismiss, this);
	        this.componentDidMount = _lodash2['default'].bind(this.componentDidMount, this);
	        this.reconfirmEmail = _lodash2['default'].bind(this.reconfirmEmail, this);
	        this.state = {
	            alertVisible: false,
	            isLoading: true
	        };
	    }

	    _inherits(VerifyPage, _React$Component);

	    _createClass(VerifyPage, [{
	        key: 'componentDidMount',

	        //getInitialState() {
	        //    return {
	        //        alertVisible: false
	        //    };
	        //}

	        value: function componentDidMount() {
	            var username = this.props.params.username;
	            var verifId = this.props.params.verificationId;
	            if (verifId.length == 7 && username.length > 2) {
	                //setTimeout(() => {console.log('Now verifying your email address.');}, 3000);
	                this.app.registerStore.clearVerifErrors();
	                this.app.registerActionCreators.verifyMailAddressById(username, verifId);
	            }
	        }
	    }, {
	        key: 'reconfirmEmail',
	        value: function reconfirmEmail() {
	            console.log('Resending an email..!');
	            //TODO: Check if reconfirm works AFTER I implement it in backend
	            this.app.registerActionCreators.reconfirmMail(this.props.params.username);
	            this.setState({ alertVisible: true });
	        }
	    }, {
	        key: 'handleAlertDismiss',
	        value: function handleAlertDismiss() {
	            this.setState({ alertVisible: false });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.props.params.verificationId == 'id') //if the user just came from the regist page
	                {
	                    return _react2['default'].createElement(
	                        'div',
	                        { className: 'verify' },
	                        this.state.alertVisible ? _react2['default'].createElement(
	                            _reactBootstrap.Alert,
	                            { bsStyle: 'success', onDismiss: this.handleAlertDismiss, dismissAfter: 3000 },
	                            _react2['default'].createElement(
	                                'h4',
	                                null,
	                                'A new confirmation mail has just been sent.'
	                            )
	                        ) : _react2['default'].createElement('div', null),
	                        _react2['default'].createElement(
	                            _reactBootstrap.Jumbotron,
	                            null,
	                            _react2['default'].createElement(
	                                'h1',
	                                null,
	                                'Thank you for signing up ',
	                                this.props.params.username,
	                                '.'
	                            ),
	                            _react2['default'].createElement(
	                                'small',
	                                null,
	                                'A verification mail has been sent to your email address. '
	                            ),
	                            _react2['default'].createElement(
	                                'p',
	                                null,
	                                'If after a while theres no verification mail in your inbox, please check the spam folder. Otherwise you can always send a new mail by clicking the button below.'
	                            ),
	                            _react2['default'].createElement(
	                                _reactBootstrap.OverlayTrigger,
	                                { placement: 'right', overlay: _react2['default'].createElement(
	                                        _reactBootstrap.Popover,
	                                        { placement: 'right', title: 'Reconfirmation button' },
	                                        'Make sure you wait at least 10 minutes before you hit this button.'
	                                    ) },
	                                _react2['default'].createElement(
	                                    _reactBootstrap.Button,
	                                    { bsStyle: 'primary', onClick: this.reconfirmEmail },
	                                    'Reconfirm mail'
	                                )
	                            )
	                        )
	                    );
	                } else if (this.props.params.verificationId.length == 7) {
	                //if the user really provided a verif id
	                return _react2['default'].createElement(
	                    'div',
	                    { className: 'verify' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'verifErrorLbl' },
	                        this.props.mailIsVerified == false ? _react2['default'].createElement(
	                            _reactBootstrap.Alert,
	                            { bsStyle: 'danger' },
	                            _react2['default'].createElement(
	                                'strong',
	                                null,
	                                this.props.verifMessage
	                            )
	                        ) : ''
	                    ),
	                    _react2['default'].createElement(
	                        _reactBootstrap.Jumbotron,
	                        null,
	                        _react2['default'].createElement(
	                            'h1',
	                            null,
	                            'Thank you for signing up ',
	                            this.props.params.username,
	                            '.'
	                        ),
	                        this.props.mailIsVerified == false ? _react2['default'].createElement(
	                            'p',
	                            null,
	                            'We are currently checking your verification id.'
	                        ) : _react2['default'].createElement(
	                            'p',
	                            null,
	                            'Your email address is now verified..!',
	                            _react2['default'].createElement('span', { className: 'glyphicon glyphicon-ok ' })
	                        ),
	                        _react2['default'].createElement(_reactLoader2['default'], { top: '83%', left: '50%', loaded: this.props.mailIsVerified != null })
	                    )
	                );
	            } else {
	                return _react2['default'].createElement(
	                    _reactBootstrap.Jumbotron,
	                    null,
	                    _react2['default'].createElement(
	                        'h2',
	                        null,
	                        'Puppies are dying!'
	                    ),
	                    _react2['default'].createElement(
	                        'small',
	                        null,
	                        'We cannot confirm an email address with this id.'
	                    )
	                );
	            }
	        }
	    }]);

	    return VerifyPage;
	})(_react2['default'].Component);

	//console.log('Props of mail verif: '+this.props.mailIsVerified);
	//if(this.props.mailIsVerified){
	//    return (
	//        <Jumbotron>
	//            <h1>Great success!</h1>
	//            <small>Your email address is verified.</small>
	//        </Jumbotron>
	//    );
	//}else {
	//
	//}

	VerifyPage.propTypes = {};

	exports['default'] = _marty2['default'].createContainer(VerifyPage, {
	    listenTo: 'registerStore',
	    fetch: {
	        mailIsVerified: function mailIsVerified() {
	            return this.app.registerStore.didVerificationSucceed();
	        },
	        verifMessage: function verifMessage() {
	            return this.app.registerStore.getVerifMessage();
	        }
	    }
	    //,pending() {
	    //    return this.done({
	    //        verifError: false,
	    //        mailIsVerified:null
	    //    });
	    //},
	    //failed(errors) {
	    //    return <div className="User User-failedToLoad">{errors}</div>;
	    //}

	});
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "verify.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("react-loader");

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';
	var React = __webpack_require__(12);

	var _require = __webpack_require__(13);

	var PageHeader = _require.PageHeader;

	var ProfilePage = React.createClass({
		displayName: 'Profile Component',
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'profile' },
				React.createElement(
					PageHeader,
					null,
					'Profile page! This is our profile page sir'
				)
			);
		}
	});

	module.exports = ProfilePage;

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "profile.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 41 */
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

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _marty = __webpack_require__(19);

	var _marty2 = _interopRequireDefault(_marty);

	//import Panel from 'react-bootstrap/lib/Panel';

	var _reactBootstrap = __webpack_require__(13);

	var _lodash = __webpack_require__(31);

	var _lodash2 = _interopRequireDefault(_lodash);

	var LoginPage = (function (_React$Component) {
	    function LoginPage(props, context) {
	        _classCallCheck(this, LoginPage);

	        _get(Object.getPrototypeOf(LoginPage.prototype), 'constructor', this).call(this, props, context);
	        this.onKeyDown = _lodash2['default'].bind(this.onKeyDown, this);
	        this.handleLogin = _lodash2['default'].bind(this.handleLogin, this);
	        //this.clearInputFields = _.bind(this.clearInputFields, this);
	    }

	    _inherits(LoginPage, _React$Component);

	    _createClass(LoginPage, [{
	        key: 'handleLogin',

	        //componentDidMount(){
	        //if(!!this.props.user){
	        //    console.log('Did  LOG IN');
	        //}else{
	        //    console.log('not logged in');
	        //}
	        //}

	        value: function handleLogin(event) {
	            var payload = {
	                username: this.refs.username.getValue(),
	                password: this.refs.password.getValue(),
	                rememberMe: this.refs.rememberMe.checked
	            };

	            //console.log('Trying to log in with: '+payload.username + payload.password);
	            //TODO: Add remember me on the parameters below
	            this.app.loginActionCreators.attemptLogin(payload);
	        }
	    }, {
	        key: 'render',

	        //this.props.isLoggedIn?false:
	        value: function render() {
	            //console.log('show is : '+this.props.show);
	            if (!!this.props.user) {
	                console.log('USER logged in');
	                return _react2['default'].createElement('div', null);
	            } else {
	                console.log('USER NOT logged in');
	                return _react2['default'].createElement(
	                    _reactBootstrap.Row,
	                    { className: 'loginPage' },
	                    _react2['default'].createElement(_reactBootstrap.Col, { md: 3 }),
	                    _react2['default'].createElement(
	                        _reactBootstrap.Col,
	                        { md: 6 },
	                        _react2['default'].createElement(
	                            _reactBootstrap.Panel,
	                            { header: 'Please log in' },
	                            _react2['default'].createElement(
	                                'div',
	                                { className: 'loginErrorLbl' },
	                                this.props.error ? _react2['default'].createElement(
	                                    _reactBootstrap.Alert,
	                                    { bsStyle: 'danger' },
	                                    _react2['default'].createElement(
	                                        'strong',
	                                        null,
	                                        this.props.error
	                                    )
	                                ) : ''
	                            ),
	                            _react2['default'].createElement(
	                                'form',
	                                { method: 'post' },
	                                _react2['default'].createElement(_reactBootstrap.Input, { name: 'username', ref: 'username', type: 'username', placeholder: 'Username or Email', autoFocus: true,
	                                    required: true, minLength: 6, defaultValue: this.app.localStorage.getUsername() ? this.app.localStorage.getUsername() : null }),
	                                _react2['default'].createElement(_reactBootstrap.Input, { name: 'password', ref: 'password', type: 'password', placeholder: 'Password',
	                                    required: true, minLength: 6, onKeyDown: this.onKeyDown }),
	                                _react2['default'].createElement(
	                                    _reactBootstrap.Row,
	                                    { className: 'loginBtns' },
	                                    _react2['default'].createElement(
	                                        _reactBootstrap.Col,
	                                        { xs: 5, md: 8 },
	                                        _react2['default'].createElement(_reactBootstrap.Input, { type: 'checkbox', defaultChecked: true, label: 'Remember me', ref: 'rememberMe' })
	                                    ),
	                                    _react2['default'].createElement(
	                                        _reactBootstrap.Col,
	                                        { xs: 12, md: 4 },
	                                        _react2['default'].createElement(
	                                            _reactBootstrap.Col,
	                                            { xs: 3, md: 6 },
	                                            _react2['default'].createElement(_reactBootstrap.ButtonInput, { type: 'reset', bsStyle: 'link' })
	                                        ),
	                                        _react2['default'].createElement(
	                                            _reactBootstrap.Col,
	                                            { xs: 3, md: 6 },
	                                            _react2['default'].createElement(_reactBootstrap.ButtonInput, { type: 'submit', onClick: this.handleLogin, bsStyle: 'success' })
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    ),
	                    _react2['default'].createElement(_reactBootstrap.Col, { md: 3 })
	                );
	            }
	        }
	    }, {
	        key: 'onKeyDown',

	        //<Button onClick={this.clearInputFields} type='#' bsStyle='link'>Clear</Button>

	        value: function onKeyDown(e) {
	            if (e.keyCode === 13) {
	                this.handleLogin();
	            }
	        }

	        //clearInputFields(e){
	        //    console.log('Clear input f.');
	        //    this.refs.username;
	        //}

	    }]);

	    return LoginPage;
	})(_react2['default'].Component);

	LoginPage.propTypes = {};

	exports['default'] = _marty2['default'].createContainer(LoginPage, {
	    listenTo: ['loginStore'],
	    fetch: {
	        error: function error() {
	            return this.app.loginStore.getError();
	        }

	        //,isLoggedIn(){
	        //    return this.app.loginStore.isLoggedIn();
	        //}
	        , user: function user() {
	            return this.app.loginStore.getUser();
	        }
	    }
	});
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "login.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _marty = __webpack_require__(19);

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

	    //registerHooks() {
	    //    let context = require.context('./', true, /hooks/);
	    //
	    //    requireFromContext(context, key => {
	    //        console.log('registering hook', key);
	    //        context(key); // Run
	    //    });
	    //}

	    function Application(options) {
	        _classCallCheck(this, Application);

	        _get(Object.getPrototypeOf(Application.prototype), 'constructor', this).call(this, options);
	        if (_marty2['default'].isBrowser) {
	            console.group('Marty registrations: ');
	        }

	        //console.log('Marty registrations: ');
	        this.registerDependencies();

	        //console.log('Now registering hooks.');
	        //this.registerHooks();
	        //console.log('Now registering router.');
	        this.router = __webpack_require__(43);
	        if (_marty2['default'].isBrowser) {
	            console.groupEnd();
	        }
	    }

	    _inherits(Application, _Marty$Application);

	    _createClass(Application, [{
	        key: 'registerDependencies',
	        value: function registerDependencies() {
	            var _this = this;

	            var context = __webpack_require__(44);

	            requireFromContext(context, function (key) {
	                // NOTE: id could potentially clash if files are named the same.
	                var id = key.substr(key.lastIndexOf('/') + 1);
	                console.log('Registering marty assets: ', id);
	                _this.register(id, context(key));
	            });
	        }
	    }]);

	    return Application;
	})(_marty2['default'].Application);

	module.exports = Application;

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "application.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _marty = __webpack_require__(19);

	var _marty2 = _interopRequireDefault(_marty);

	var _reactRouter = __webpack_require__(14);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	exports['default'] = _reactRouter2['default'].create({
	    routes: __webpack_require__(10),
	    location: location()
	});

	function location() {
	    if (typeof window !== 'undefined') {
	        return _reactRouter2['default'].HistoryLocation;
	        //return Router.HashLocation;
	    }
	}
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "router.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./actions/loginActionCreators": 45,
		"./actions/loginActionCreators.js": 45,
		"./actions/navigationActionCreators": 47,
		"./actions/navigationActionCreators.js": 47,
		"./actions/registerActionCreators": 49,
		"./actions/registerActionCreators.js": 49,
		"./queries/loginQueries": 51,
		"./queries/loginQueries.js": 51,
		"./sources/localStorage": 52,
		"./sources/localStorage.js": 52,
		"./sources/session": 53,
		"./sources/session.js": 53,
		"./sources/usersApi": 54,
		"./sources/usersApi.js": 54,
		"./stores/loginStore": 56,
		"./stores/loginStore.js": 56,
		"./stores/registerStore": 57,
		"./stores/registerStore.js": 57
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
	webpackContext.id = 44;


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

	var _lodash = __webpack_require__(31);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _marty = __webpack_require__(19);

	var _marty2 = _interopRequireDefault(_marty);

	var _constantsLoginConstants = __webpack_require__(46);

	var _constantsLoginConstants2 = _interopRequireDefault(_constantsLoginConstants);

	var LoginActionCreators = (function (_Marty$ActionCreators) {
	    function LoginActionCreators(options) {
	        _classCallCheck(this, LoginActionCreators);

	        if (options) {
	            _get(Object.getPrototypeOf(LoginActionCreators.prototype), 'constructor', this).call(this, options);
	        } else {
	            _get(Object.getPrototypeOf(LoginActionCreators.prototype), 'constructor', this).call(this);
	        }
	    }

	    _inherits(LoginActionCreators, _Marty$ActionCreators);

	    _createClass(LoginActionCreators, [{
	        key: 'attemptLogin',

	        //this.dispatch(LoginConstants.LOGIN_ATTEMPT, payload);

	        value: function attemptLogin(payLoad) {
	            var _this = this;

	            //console.log('Attempting to log in with username: '+payLoad.username +' and password: '+payLoad.password);
	            //if(payLoad.rememberMe){
	            //    this.setState({rememberMe:true});
	            //}

	            this.app.usersApi.login(payLoad.username, payLoad.password).then(function (res) {
	                //console.log('Response received: '+JSON.stringify(res));
	                var status = res.status;
	                var code = res.code;
	                var message = res.message;
	                var data = res.data;

	                if (status == 'success') {
	                    var token = data.token;
	                    _this.app.session.setToken(token);
	                    _this.app.localStorage.setToken(token);
	                    if (payLoad.rememberMe) {
	                        _this.app.localStorage.setUsername(payLoad.username);
	                    } else {
	                        _this.app.localStorage.setUsername(null);
	                    }

	                    _this.dispatch(_constantsLoginConstants2['default'].LOGIN_SUCCESS, { user: data.user, token: token, error: null });
	                    //console.log('LOGIN SUCCESS')
	                } else {
	                    //console.log('LOGIN FAILED: '+message+' code: '+code);
	                    _this.dispatch(_constantsLoginConstants2['default'].LOGIN_FAILURE, { error: message });
	                }
	            }, function (err) {
	                console.log('loginStore.attemptLogin err: ' + err);
	                _this.dispatch(_constantsLoginConstants2['default'].LOGIN_FAILURE, { error: 'Huston we got a problem and as a result puppies are dying right now. Please try again later.' });
	            });
	        }
	    }, {
	        key: 'attemptLogout',
	        value: function attemptLogout() {

	            var token = this.app.loginStore.getToken();
	            this.app.session.logout();
	            this.app.localStorage.logout();
	            this.app.usersApi.logout(token).then(function (res) {}, function (err) {});
	            this.dispatch(_constantsLoginConstants2['default'].LOGGED_OUT);
	        }

	        //loggedIn(user) {
	        //    if (this.app.router.getCurrentPath() === '/login') {
	        //        this.app.navigationActionCreators.navigateHome();
	        //    }
	        //
	        //    this.dispatch(LoginConstants.LOGGED_IN, user);
	        //}

	        //logout() {
	        //    this.dispatch(LoginConstants.LOGGED_OUT);
	        //    console.log('logout');
	        //    this.app.navigationActionCreators.navigateToLogin();
	        //}

	    }]);

	    return LoginActionCreators;
	})(_marty2['default'].ActionCreators);

	exports['default'] = LoginActionCreators;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "loginActionCreators.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _marty = __webpack_require__(19);

	var _marty2 = _interopRequireDefault(_marty);

	exports['default'] = _marty2['default'].createConstants(['LOGIN_SUCCESS', 'LOGIN_FAILURE', 'LOGGED_OUT', 'RECEIVE_USER', 'RECEIVE_TOKEN']);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "loginConstants.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 47 */
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

	var _marty = __webpack_require__(19);

	var _marty2 = _interopRequireDefault(_marty);

	var _constantsNavigationConstants = __webpack_require__(48);

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
	            //console.log(' navigateHome !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
	            this.navigateTo('home');
	        }
	    }, {
	        key: 'navigateToLogin',
	        value: function navigateToLogin() {
	            //console.log(' navigateToLogin !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
	            this.navigateTo('login');
	        }
	    }, {
	        key: 'navigateToVerify',
	        value: function navigateToVerify(username) {
	            //console.log(' navigateToLogin !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
	            this.navigateTo('verify', { username: username, verificationId: 'id' });
	        }
	    }, {
	        key: 'changeRoute',
	        value: function changeRoute(state) {
	            //console.log(' changeRoute !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! '+JSON.stringify(state));

	            this.dispatch(_constantsNavigationConstants2['default'].CHANGE_ROUTE, state);
	            if (state.path === '/logout') {
	                this.app.loginActionCreators.logout();
	            }
	        }
	    }, {
	        key: 'navigateTo',
	        value: function navigateTo(route) {
	            var params = arguments[1] === undefined ? {} : arguments[1];

	            //console.log('navigate to', route, params);
	            this.app.router.transitionTo(route, params);
	        }
	    }]);

	    return NavigationActionCreators;
	})(_marty2['default'].ActionCreators);

	exports['default'] = NavigationActionCreators;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "navigationActionCreators.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _marty = __webpack_require__(19);

	var _marty2 = _interopRequireDefault(_marty);

	exports['default'] = _marty2['default'].createConstants(['CHANGE_ROUTE']);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "navigationConstants.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 49 */
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

	var _marty = __webpack_require__(19);

	var _marty2 = _interopRequireDefault(_marty);

	var _constantsRegisterConstantsJs = __webpack_require__(50);

	var _constantsRegisterConstantsJs2 = _interopRequireDefault(_constantsRegisterConstantsJs);

	var _lodash = __webpack_require__(31);

	var _lodash2 = _interopRequireDefault(_lodash);

	var RegisterActionCreator = (function (_Marty$ActionCreators) {
	    function RegisterActionCreator(options) {
	        _classCallCheck(this, RegisterActionCreator);

	        if (options) {
	            _get(Object.getPrototypeOf(RegisterActionCreator.prototype), 'constructor', this).call(this, options);
	        } else {
	            _get(Object.getPrototypeOf(RegisterActionCreator.prototype), 'constructor', this).call(this);
	        }

	        this.attemptRegister = _lodash2['default'].bind(this.attemptRegister, this);
	    }

	    _inherits(RegisterActionCreator, _Marty$ActionCreators);

	    _createClass(RegisterActionCreator, [{
	        key: 'attemptRegister',
	        value: function attemptRegister(payLoad) {
	            this.dispatch(_constantsRegisterConstantsJs2['default'].REGISTER_NEW_USER, payLoad);
	        }
	    }, {
	        key: 'reconfirmMail',
	        value: function reconfirmMail(username) {
	            this.dispatch(_constantsRegisterConstantsJs2['default'].RESEND_CONFIRM_MAIL, username);
	        }
	    }, {
	        key: 'verifyMailAddressById',
	        value: function verifyMailAddressById(username, verId) {
	            this.dispatch(_constantsRegisterConstantsJs2['default'].VERIFY_MAIL_ADDRESS, username, verId);
	        }
	    }]);

	    return RegisterActionCreator;
	})(_marty2['default'].ActionCreators);

	exports['default'] = RegisterActionCreator;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "registerActionCreators.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _marty = __webpack_require__(19);

	var _marty2 = _interopRequireDefault(_marty);

	exports['default'] = _marty2['default'].createConstants(['REGISTER_NEW_USER', 'RESEND_CONFIRM_MAIL', 'VERIFY_MAIL_ADDRESS'
	//,'RECEIVE_REGIST_SUCCESS'
	//,'RECEIVE_REGIST_FAILED'
	]);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "registerConstants.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 51 */
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

	var _marty = __webpack_require__(19);

	var _marty2 = _interopRequireDefault(_marty);

	var _constantsLoginConstants = __webpack_require__(46);

	var _constantsLoginConstants2 = _interopRequireDefault(_constantsLoginConstants);

	//import _ from 'lodash';
	//import UsersAPI from '../sources/usersApi';

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
	            //console.log('TOKEN: '+this.app.localStorage.getToken());
	            //this.app.localStorage.setToken('BAR');
	            if (token) {
	                this.dispatch(_constantsLoginConstants2['default'].RECEIVE_TOKEN, token);
	                return token;
	            }
	        }
	    }, {
	        key: 'getUserForToken',
	        value: function getUserForToken(token) {
	            var _this = this;

	            if (!token || token.length <= 0) {
	                //if the token is null/undefined or if the length is zero
	                return this.app.loginActionCreators.attemptLogout();
	            }
	            return this.app.usersApi.getSelf(token).then(function (res) {
	                var status = res.status;
	                var message = res.message;
	                var data = res.data;

	                if (status == 'success') {
	                    console.log('Got user');
	                    _this.dispatch(_constantsLoginConstants2['default'].RECEIVE_USER, data);
	                    return data;
	                } else {
	                    //console.log('SELF FAILED: '+message+' code: '+code);
	                    _this.app.loginActionCreators.attemptLogout();
	                    //console.log('Err is: '+message);
	                    return message;
	                }
	            }, function (err) {
	                return console.log('Err is: ' + err);
	            });
	        }
	    }, {
	        key: 'attemptReAuth',
	        value: function attemptReAuth() {
	            var token = this.getTokenFromStorage();
	            if (token) {
	                this.getUserForToken(token);
	            } else {
	                console.log('...re auth failed.');
	            }
	        }
	    }]);

	    return LoginQueries;
	})(_marty2['default'].Queries);

	exports['default'] = LoginQueries;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "loginQueries.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _marty = __webpack_require__(19);

	var _marty2 = _interopRequireDefault(_marty);

	var LocalStorage = (function () {
	    function LocalStorage() {
	        _classCallCheck(this, LocalStorage);
	    }

	    _createClass(LocalStorage, [{
	        key: 'setToken',
	        //extends Marty.LocalStorageStateSource {
	        value: function setToken(token) {

	            return _marty2['default'].isBrowser ? window.localStorage.setItem('token', token) : null;
	            //this.set('token', token);
	        }
	    }, {
	        key: 'getToken',
	        value: function getToken() {
	            return _marty2['default'].isBrowser ? window.localStorage.getItem('token') : null;
	            //return this.get('token');
	        }
	    }, {
	        key: 'setUsername',
	        value: function setUsername(username) {
	            return _marty2['default'].isBrowser ? window.localStorage.setItem('username', username) : null;
	            //this.set('token', token);
	        }
	    }, {
	        key: 'getUsername',
	        value: function getUsername() {
	            return _marty2['default'].isBrowser ? window.localStorage.getItem('username') : null;
	            //this.set('token', token);
	        }
	    }, {
	        key: 'logout',
	        value: function logout() {
	            return _marty2['default'].isBrowser ? window.localStorage.clear('token') : null;
	            //this.clear('token')
	        }
	    }, {
	        key: 'clear',
	        value: function clear(key) {
	            return _marty2['default'].isBrowser ? window.localStorage.clear(key) : null;
	            //this.storage.clear(key);
	        }
	    }]);

	    return LocalStorage;
	})();

	exports['default'] = LocalStorage;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "localStorage.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 53 */
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

	var _marty = __webpack_require__(19);

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
/* 54 */
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

	var _marty = __webpack_require__(19);

	var _marty2 = _interopRequireDefault(_marty);

	var _util = __webpack_require__(55);

	var _configJson = __webpack_require__(4);

	var _configJson2 = _interopRequireDefault(_configJson);

	//import httpRequest from 'superagent';

	var base = _configJson2['default'].API.ROOT;
	var endpoint = base; //+ 'users';

	//function handleRes(res) {
	//    console.log('Responce: '+res.body);
	//    let json = res.json();
	//    if (res.ok) {
	//        return json;
	//    }
	//    throw new Error('Error in response', json, res);
	//}

	var UserHttpAPI = (function (_Marty$HttpStateSource) {
	    function UserHttpAPI() {
	        _classCallCheck(this, UserHttpAPI);

	        _get(Object.getPrototypeOf(UserHttpAPI.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _inherits(UserHttpAPI, _Marty$HttpStateSource);

	    _createClass(UserHttpAPI, [{
	        key: 'handleRes',

	        //constructor(options){
	        //    super(options);
	        //    this.login = this.login.bind(this);
	        //}

	        value: function handleRes(res) {
	            var json = res.json();
	            //console.log('Responce in Json: '+JSON.stringify(json));
	            if (res.ok) {
	                return json;
	            }
	            throw new Error('Error in response', json, res);
	        }
	    }, {
	        key: 'getSelf',

	        //login(username, password) {
	        //    console.log('About to post login: '+username+password);
	        //    var url = format(endpoint + '/login');
	        //    return this.post({
	        //        url: url,
	        //        body: {
	        //            identifier: username,
	        //            password: password
	        //        }
	        //    }).then(handleRes);
	        //}

	        //register(username, password, email, firstName, lastName){
	        //
	        //    return this.post({
	        //        url: url,
	        //        body: {
	        //            username:username,
	        //            password: password,
	        //            email: email,
	        //            firstName:firstName,
	        //            lastName:lastName
	        //        }
	        //    }).then(handleRes);
	        //}

	        value: function getSelf(token, next) {
	            var url = (0, _util.format)(endpoint + '/self');
	            return this.request({
	                url: url,
	                method: 'POST',
	                body: { token: token }
	            }).then(this.handleRes);

	            //return httpRequest.post(url)
	            //    .send({ token: token})
	            //    .set('Accept', 'application/json')
	            //    .end(next);
	        }
	    }, {
	        key: 'logout',
	        value: function logout(token) {
	            var url = (0, _util.format)(endpoint + '/logout');
	            return this.request({
	                url: url,
	                method: 'POST',
	                body: { token: token }
	            }).then(this.handleRes);
	            //return httpRequest.post(url)
	            //    .send({ identifier: username, password: password })
	            //    .set('Accept', 'application/json')
	            //    .end(next);
	        }
	    }, {
	        key: 'login',
	        value: function login(username, password) {

	            var url = (0, _util.format)(endpoint + '/auth/local');
	            return this.request({
	                url: url,
	                method: 'POST',
	                body: { identifier: username, password: password }
	            }).then(this.handleRes);
	            //return httpRequest.post(url)
	            //    .send({ identifier: username, password: password })
	            //    .set('Accept', 'application/json')
	            //    .end(next);
	        }
	    }, {
	        key: 'register',
	        value: function register(username, password, email, firstName, lastName, next) {

	            var url = (0, _util.format)(endpoint + '/signup');
	            return this.request({
	                url: url,
	                method: 'POST',
	                body: {
	                    username: username,
	                    password: password,
	                    email: email,
	                    firstName: firstName,
	                    lastName: lastName
	                }
	            }).then(this.handleRes);

	            console.log('Attempting to register with us: ' + username + ' pas' + password + ' mail: ' + email + ' fn: ' + firstName + ' ln: ' + lastName);
	            //return httpRequest.post(url)
	            //    .send({
	            //        username: username,
	            //        password: password,
	            //        email: email,
	            //        firstName: firstName,
	            //        lastName: lastName
	            //    })
	            //    .set('Accept', 'application/json')
	            //    .end(next);
	        }
	    }, {
	        key: 'resendMail',
	        value: function resendMail(username, next) {
	            var url = (0, _util.format)(endpoint + '/reconfirm');

	            return this.request({
	                url: url,
	                method: 'POST',
	                body: { username: username }
	            }).then(this.handleRes);

	            //return httpRequest.post(url)
	            //    .send({
	            //        username: username
	            //    })
	            //    .set('Accept', 'application/json')
	            //    .end(next);
	        }
	    }, {
	        key: 'verifyMail',
	        value: function verifyMail(username, verificationId, next) {
	            var url = (0, _util.format)(endpoint + '/signup/verify');
	            return this.request({
	                url: url,
	                method: 'POST',
	                body: {
	                    username: username,
	                    verificationId: verificationId
	                }
	            }).then(this.handleRes);

	            //return httpRequest.post(url)
	            //    .send({
	            //        username: username
	            //        ,verificationId: verificationId
	            //    })
	            //    .set('Accept', 'application/json')
	            //    .end(next);
	        }

	        //
	        //
	        //verifyEmail: function (username, verificationId) {
	        //    request.post(API_ENDPOINTS.VERIFY_EMAIL)
	        //        .send({ username: username, verificationId: verificationId })
	        //        .set('Accept', 'application/json')
	        //        .end(function(error, res){
	        //            if(error) return ServerActionCreators.receiveMailVerification('error', error);
	        //            if (res) {
	        //                var responseParsed = res.body;
	        //                //console.log(responseParsed);
	        //                return ServerActionCreators.receiveMailVerification(responseParsed.status, responseParsed.message, responseParsed.data, responseParsed.code );
	        //            }
	        //        });
	        //},

	    }]);

	    return UserHttpAPI;
	})(_marty2['default'].HttpStateSource);

	exports['default'] = UserHttpAPI;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "usersApi.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = require("util");

/***/ },
/* 56 */
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

	var _lodash = __webpack_require__(31);

	var _lodash2 = _interopRequireDefault(_lodash);

	//import UsersAPI from '../sources/usersApi';

	var _marty = __webpack_require__(19);

	var _marty2 = _interopRequireDefault(_marty);

	var _constantsLoginConstants = __webpack_require__(46);

	var _constantsLoginConstants2 = _interopRequireDefault(_constantsLoginConstants);

	var LoginStore = (function (_Marty$Store) {
	    function LoginStore(options) {
	        _classCallCheck(this, LoginStore);

	        if (options) {
	            _get(Object.getPrototypeOf(LoginStore.prototype), 'constructor', this).call(this, options);
	        } else {
	            _get(Object.getPrototypeOf(LoginStore.prototype), 'constructor', this).call(this);
	        }

	        this.state = {
	            error: null, //login error
	            user: null, //User data
	            token: null //The token to use on each request
	        };
	        //this.api = new UsersAPI();
	        //this.attemptLogin = _.bind(this.attemptLogin, this);
	        //this.loginFailure = _.bind(this.loginFailure, this);
	        //this.logout = _.bind(this.logout, this);

	        this.handlers = {
	            //attemptLogin: LoginConstants.LOGIN_ATTEMPT
	            onLoginSuccess: _constantsLoginConstants2['default'].LOGIN_SUCCESS,
	            onLoginFailure: _constantsLoginConstants2['default'].LOGIN_FAILURE,
	            onGotToken: _constantsLoginConstants2['default'].RECEIVE_TOKEN,
	            onLogout: _constantsLoginConstants2['default'].LOGGED_OUT,
	            onGotUserSuccess: _constantsLoginConstants2['default'].RECEIVE_USER
	        };
	    }

	    _inherits(LoginStore, _Marty$Store);

	    _createClass(LoginStore, [{
	        key: 'onLoginSuccess',
	        value: function onLoginSuccess(payload) {
	            this.clearErrors();
	            this.setState({ user: payload.user, token: payload.token, error: payload.error });
	            //console.log('LOGIN Success');
	        }
	    }, {
	        key: 'onLoginFailure',
	        value: function onLoginFailure(payload) {
	            this.clearErrors();
	            this.setState({ error: payload.error });
	            //console.log('LOGIN FAILURE: '+this.state.error);
	        }
	    }, {
	        key: 'onLogout',
	        value: function onLogout() {
	            this.setState({
	                token: null,
	                user: null
	            });
	        }
	    }, {
	        key: 'onGotUserSuccess',
	        value: function onGotUserSuccess(user) {
	            this.setState({ user: user });
	        }
	    }, {
	        key: 'onGotToken',
	        value: function onGotToken(token) {
	            this.setState({ token: token });
	        }
	    }, {
	        key: 'getUser',
	        value: function getUser() {
	            return this.fetch({
	                id: 'get-user',
	                locally: function locally() {
	                    //Try to fetch old tokens
	                    if (!this.state.token) {
	                        //if theres no token in our state
	                        var tok = this.app.session.getToken() || this.app.localStorage.getToken();
	                        //console.log('Token exists session: '+!!this.app.session.getToken()+ ' local storage: '+!!this.app.localStorage.getToken());
	                        if (tok) {
	                            //console.log('Got old token: '+tok);
	                            //this.app.session.setToken(tok);
	                            this.setState({ token: tok });
	                        }
	                    }

	                    /*
	                     *       1 out of 3 cases.
	                     *
	                     *   1) We've got a token AND weve got a user --> just return the user locally
	                     *
	                     *   2) We've got a token but we DONT have a user --> go remotely and fetch the user
	                     *
	                     *   3) We've got NO token and we've got NO user --> just return false locally
	                     *
	                     * */
	                    if (!this.state.token) {
	                        //if theres no token in our state       //case 3
	                        //console.log('No token NO user. NOT logged in.')
	                        return !!this.state.user;
	                    } else {
	                        //if we got a token
	                        if (this.state.user) {
	                            //case 1
	                            //console.log('Got token AND user. Logged in.')
	                            return this.state.user;
	                        } else {}
	                    }
	                },
	                remotely: function remotely() {
	                    if (this.state.token == null) {
	                        throw new Error('Token is null, this shouldnt be running');
	                    }
	                    console.log('Lets remotely get the user.');
	                    return this.app.loginQueries.getUserForToken(this.state.token);
	                }
	            });
	        }
	    }, {
	        key: 'clearErrors',
	        value: function clearErrors() {
	            this.setState({ error: null });
	        }
	    }, {
	        key: 'getToken',

	        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	        ///////////////////////////////////////////         GETTERS         ////////////////////////////////////////////////
	        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	        value: function getToken() {
	            return this.state.token;
	        }
	    }, {
	        key: 'getError',
	        value: function getError() {
	            return this.state.error;
	        }
	    }]);

	    return LoginStore;
	})(_marty2['default'].Store);

	exports['default'] = LoginStore;
	module.exports = exports['default'];
	//case 2
	//do nothing and fetch remotely

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "loginStore.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 57 */
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

	var _lodash = __webpack_require__(31);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _marty = __webpack_require__(19);

	var _marty2 = _interopRequireDefault(_marty);

	var _constantsRegisterConstantsJs = __webpack_require__(50);

	var _constantsRegisterConstantsJs2 = _interopRequireDefault(_constantsRegisterConstantsJs);

	//import UsersAPI from '../sources/usersApi.js';

	var RegisterStore = (function (_Marty$Store) {
	    function RegisterStore(options) {
	        _classCallCheck(this, RegisterStore);

	        _get(Object.getPrototypeOf(RegisterStore.prototype), 'constructor', this).call(this, options);
	        //this.api = new UsersAPI();
	        this.state = {
	            registError: null,
	            verifMessage: null,
	            didVerifSucceed: null,
	            didRegistSucceed: null

	        };
	        this.registerSuccess = _lodash2['default'].bind(this.registerSuccess, this);
	        this.registerFailed = _lodash2['default'].bind(this.registerFailed, this);
	        this.verifMailSuccess = _lodash2['default'].bind(this.verifMailSuccess, this);
	        this.verifMailFailed = _lodash2['default'].bind(this.verifMailFailed, this);

	        this.handlers = {
	            attemptRegister: _constantsRegisterConstantsJs2['default'].REGISTER_NEW_USER,
	            resendMail: _constantsRegisterConstantsJs2['default'].RESEND_CONFIRM_MAIL,
	            verifyMail: _constantsRegisterConstantsJs2['default'].VERIFY_MAIL_ADDRESS
	            //registerSuccess: RegisterConstants.RECEIVE_REGIST_SUCCESS,
	            //registerFailed: RegisterConstants.RECEIVE_REGIST_FAILED
	        };
	    }

	    _inherits(RegisterStore, _Marty$Store);

	    _createClass(RegisterStore, [{
	        key: 'attemptRegister',
	        value: function attemptRegister(payLoad) {
	            var _this = this;

	            var self = this;
	            this.setState({ didRegistSucceed: null });
	            this.usersApi.register(payLoad.username, payLoad.password, payLoad.email, payLoad.firstName, payLoad.lastName, function (error, res) {
	                _this.handleServerResponce(error, res, self.registerSuccess, self.registerFailed);
	            });
	        }
	    }, {
	        key: 'resendMail',
	        value: function resendMail(username) {
	            var _this2 = this;

	            var self = this;
	            this.usersApi.resendMail(username, function (error, res) {
	                _this2.handleServerResponce(error, res, self.resendMailSuccess, self.resendMailFailed);
	            });
	        }
	    }, {
	        key: 'verifyMail',
	        value: function verifyMail(username, verificationId) {
	            var _this3 = this;

	            this.setState({ didVerifSucceed: null });
	            var self = this;
	            this.usersApi.verifyMail(username, verificationId, function (error, res) {
	                _this3.handleServerResponce(error, res, self.verifMailSuccess, self.verifMailFailed);
	            });
	        }
	    }, {
	        key: 'handleServerResponce',
	        value: function handleServerResponce(error, res, onSuccess, onFail) {
	            if (error) {
	                return onFail(error);
	            } else {
	                var body = res.body;
	                if (body.status == 'fail' || body.status == 'error') {
	                    return onFail(body.message, body.code);
	                } else {
	                    return onSuccess(body.data, body.message);
	                }
	            }
	        }
	    }, {
	        key: 'verifMailSuccess',
	        value: function verifMailSuccess(user, msg) {
	            console.log('Verif mail success.');
	            this.setState({ didVerifSucceed: true, verifMessage: msg });
	        }
	    }, {
	        key: 'verifMailFailed',
	        value: function verifMailFailed(exception) {
	            //console.log('Verif mail fail.');
	            this.setState({ didVerifSucceed: false, verifMessage: exception });
	        }
	    }, {
	        key: 'resendMailSuccess',
	        value: function resendMailSuccess() {
	            console.log('Resend mail success.');
	        }
	    }, {
	        key: 'resendMailFailed',
	        value: function resendMailFailed() {
	            console.log('Resend mail failed.');
	        }
	    }, {
	        key: 'registerFailed',
	        value: function registerFailed(exception, code) {
	            console.log('REGISTRATION FAILED: ' + exception + ' code: ' + code);
	            this.setState({ registError: exception, didRegistSucceed: false });
	        }
	    }, {
	        key: 'registerSuccess',
	        value: function registerSuccess(data) {
	            this.setState({ registError: null, didRegistSucceed: true });
	            this.app.navigationActionCreators.navigateToVerify(data.username);
	        }
	    }, {
	        key: 'didRegistrationSucceed',
	        value: function didRegistrationSucceed() {
	            return this.state.didRegistSucceed;
	        }
	    }, {
	        key: 'didVerificationSucceed',

	        //wether user email verification succeded or failed
	        value: function didVerificationSucceed() {
	            return this.state.didVerifSucceed;
	        }
	    }, {
	        key: 'getVerifMessage',
	        value: function getVerifMessage() {
	            return this.state.verifMessage;
	        }
	    }, {
	        key: 'getRegistError',
	        value: function getRegistError() {
	            return this.state.registError;
	        }
	    }, {
	        key: 'clearRegistErrors',
	        value: function clearRegistErrors() {
	            this.setState({ registError: null, didRegistSucceed: null });
	        }
	    }, {
	        key: 'clearVerifErrors',
	        value: function clearVerifErrors() {
	            this.setState({ verifMessage: null, didVerifSucceed: null });
	        }
	    }]);

	    return RegisterStore;
	})(_marty2['default'].Store);

	exports['default'] = RegisterStore;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "registerStore.js" + ": " + err.message); } }); } } })(); }

/***/ }
/******/ ]);