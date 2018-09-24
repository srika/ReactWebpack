var React = require('react');

var WelcomeForm = React.createClass({

    onFormSubmit: function(e){
        e.preventDefault();
        var updates = {};
        var city = this.refs.city.value;
        var state = this.refs.state.value;

        if(city.length > 0){
            this.refs.city.value = '';
            updates.city = city;
        }
        if(state.length > 0){
            this.refs.state.value = '';
            updates.state = state;
        }
        this.props.collectData(updates)
    },
    render: function(){
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    Enter Your City: <input type="text" ref="city" placeholder="Enter City" />
                </div>
                <div>
                    Enter Your State: <input type="text" ref="state" placeholder="Enter State" />
                </div>
                <div>
                    <button>submit</button>
                </div>                
            </form>
        )
    }
})

module.exports = WelcomeForm