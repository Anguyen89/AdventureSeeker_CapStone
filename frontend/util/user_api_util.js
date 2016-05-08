var UserServerActions = require('../actions/user/user_server_actions');

var UserApiUtil = {

// this was for testing purposes, not intended use
receiveAllUsers: function(){
  $.ajax({
    method: "GET",
    url: 'api/users',
    success: function(users){
      UserServerActions.receiveAllUsers(users);
    }
  });
},


login: function (user) {
  $.ajax({
    type: "POST",
    url: "api/session",
    data: { user: user },
    dataType: "json",
    success: function (currentUser) {
      UserServerActions.receiveCurrentUser(currentUser);
    },

  });
},


logout: function(){
  $.ajax({
    type: "DELETE",
    url: "api/session",
    success: function(){
      UserServerActions.logoutCurrentUser();
    }
  });
},


createUser: function(user){
  $.ajax({
    type: "POST",
    url: '/api/users',
    data: {user: user},
    success: function(currentUser){
      UserServerActions.receiveCurrentUser(currentUser);
    }

  });
}
};

module.exports = UserApiUtil;
