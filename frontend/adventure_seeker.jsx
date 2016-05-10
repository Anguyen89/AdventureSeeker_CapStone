var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

// var App = require('./components/app');
AdventureApiUtil = require('./util/adventure_api_util');
AdventureStore = require('./stores/adventure_store');
var UserSignUp = require('./components/user/user_signup');


var router = (
  <Route path="/" component={UserSignUp}></Route>
);


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Router history={hashHistory} routes={router} />, document.getElementById('content'));
});



// Roll out frontend login forms
//need userAction for login @ click on component
//userUtil to post a request to login

// implemented flux Architecture for user model
// - created the server and client actions for logins
// - created util and store actions for login
//
// --WIll need to implement the login forms.
