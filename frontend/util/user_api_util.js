var UserServerActions = require('../actions/user/user_server_action');

var UserApiUtil = {

login: function(user){
  $.ajax({
    method: "POST",
    url: "/api/users",
    success: function(currentUser){
      UserServerActions.receiveCurrentUser(currentUser);
    }
  });
}


};

module.exports = UserApiUtil;
