var React = require('react');

var WelcomeMessage = React.createClass({
    render: function(){
        var city = this.props.city;
        var state = this.props.state;
        return (
            <div>
                <h3>My city is {city}</h3>
                <h3>My state is {state}</h3>
            </div>
        )
    }
})

module.exports = WelcomeMessage