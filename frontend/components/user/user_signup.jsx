var React = require('react');
var ClientActions = require('../../actions/user/user_client_actions');
var UserStore = require('../../stores/user_store');

var UserSignUp = React.createClass({
  getInitialState: function(){
    return({ username: "", password: ""});
  },

  handleSubmit: function(event){
    event.preventDefault();
    var user = {
      username: this.state.username,
      password: this.state.password
    };
    ClientActions.createUser(user);
  },

  usernameChange: function(event){
    this.setState({ username: event.target.value});
  },

  passwordChange: function(event){
    this.setState({ password: event.target.value});
  },

  render: function(){
    return(
      <div className="sign_up_form">
        <form onSubmit={this.handleSubmit}>
          <h3 className="sign_up">Sign Up</h3>
          <br></br>
          Username
          <input type="text" value={this.state.username} onChange={this.usernameChange}/>
          <br></br>
          Password
          <input type='text' value={this.state.password} onChange={this.passwordChange} />
          <input type="submit" value="Sign Up"/>
        </form>

      </div>
    );
  }
});

module.exports = UserSignUp;
