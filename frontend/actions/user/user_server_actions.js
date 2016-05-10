var AppDispatcher = require('../../dispatcher/dispatcher');
var UserConstants = require('../../constants/user_constants');


var UserServerActions = {

  receiveAllUsers: function(users){
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVE_ALL_USERS,
      users: users
    });
  },

  receiveCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.CURRENT_USER_RECEIVED,
      currentUser: user
    });
  },

  logoutCurrentUser: function(){
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGOUT_CURRENT_USER
    });
  }


};


module.exports = UserServerActions;
