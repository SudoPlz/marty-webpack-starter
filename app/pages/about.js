'use strict';
var React = require('react');
var {PageHeader} = require('react-bootstrap');

var AboutPage = React.createClass({
	displayName: 'AboutPage Component',
	render: function () {
		return (
		  <div className='about'>
			  <PageHeader>About page! This is our about page sir</PageHeader>
		  </div>
		);
	}
});

module.exports = AboutPage;