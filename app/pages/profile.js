'use strict';
var React = require('react');
var {PageHeader} = require('react-bootstrap');

var ProfilePage = React.createClass({
	displayName: 'Profile Component',
	render: function () {
		return (
		  <div className='profile'>
			  <PageHeader>Profile page! This is our profile page sir</PageHeader>
		  </div>
		);
	}
});

module.exports = ProfilePage;