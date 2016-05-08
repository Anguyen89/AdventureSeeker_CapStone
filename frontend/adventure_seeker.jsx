var React = require('react');
var ReactDOM = require('react-dom');
UserApiUtil = require('./util/user_api_util');
UserStore = require('./stores/user_store');
var UserLogin = require('./components/user/user_login');
document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<UserLogin />, document.getElementById('content'));
});



// Roll out frontend login forms
//need userAction for login @ click on component
//userUtil to post a request to login

// implemented flux Architecture for user model
// - created the server and client actions for logins
// - created util and store actions for login
//
// --WIll need to implement the login forms.
