'use strict';
var React = require('react');
var {PageHeader} = require('react-bootstrap');

var About = React.createClass({
	displayName: 'About Component',
	render: function () {
		return (
		  <div className='about'>
			  <PageHeader>About page! This is our about page sir</PageHeader>
		  </div>
		);
	}
});

module.exports = About;