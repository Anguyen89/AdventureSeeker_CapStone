var React = require('react');
var UserClientActions = require('../../actions/user/user_client_actions');
var UserStore = require('../../stores/user_store');


var UserLoginForm = React.createClass({

  getInitialState: function(){
    return {username: "", password: ""};
  },

  usernameChange: function(e){
    this.setState({username: e.target.value});
  },

  passwordChange: function(e){
    this.setState({password: e.target.value});
  },

  handleSubmit: function(event){
    event.preventDefault();
    var user = {
      username: this.state.username,
      password: this.state.password
    };
    UserClientActions.login(user);
  },

  render: function(){
    return (
      <div>
        <h3>Login Form</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onChange={this.usernameChange} />
          <input type="text" value={this.state.password} onChange={this.passwordChange} />
          <input type="submit" value="Login"/>
        </form>
      </div>
    );
  }
});



module.exports = UserLoginForm;
