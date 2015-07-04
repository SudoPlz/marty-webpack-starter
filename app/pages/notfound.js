'use strict';
var React = require('react');

var NotFoundPage = React.createClass({
	displayName: 'NotFoundPage Component',
	render: function () {
		return (
		<div className='NotFound'>
			<h1 ref='title'>Sorry this page could not be found!</h1>
		</div>
		);
	}
});

module.exports = NotFoundPage;