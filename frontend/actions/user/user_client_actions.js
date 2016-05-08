
var UserApiUtil = require('../../util/user_api_util');

var UserClientActions = {

  login: function(user){
    UserApiUtil.login(user);
  },

  logout: function(){
    UserApiUtil.logout();
  },

  createUser: function(user){
    UserApiUtil.createUser(user);
  },

};

module.exports = UserClientActions;
