var React = require('react');
var WelcomeMessage = require('WelcomeMessage');
var WelcomeForm = require('WelcomeForm');

var WelcomeMain = React.createClass({
    getDefaultProps: function(){
        return {
            city: 'Nalgonda',
            state: 'Telangana'
        }
    },
    //inintailze the state [step-1]
    getInitialState: function(){
        return{
            city: this.props.city,
            state: this.props.state
        }
    },
    changeState: function(updates){
        this.setState(updates)
    },
    render: function(){
        var city = this.state.city;
        var state = this.state.state;
        return (
            <div>
                <WelcomeMessage city={city} state={state} />
                <WelcomeForm collectData={this.changeState} />
            </div>
        )
    }
})

module.exports = WelcomeMain