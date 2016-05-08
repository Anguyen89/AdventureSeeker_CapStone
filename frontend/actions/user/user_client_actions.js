
var UserApiUtil = require('../../util/user_api_util');

var UserClientActions = {

  login: function(user){
    UserApiUtil.login(user);
  },

  logout: function(){
    UserApiUtil.logout();
  },

  createUser: function(user){
    console.log("inside create");
    UserApiUtil.createUser(user);
  },

  allUsers: function(){
    UserApiUtil.receiveAllUsers();
  }

};

module.exports = UserClientActions;
