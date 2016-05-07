var AppDispatcher = require('../../dispatcher/dispatcher');
var UserConstants = require('../../constants/user_constants');


var ServerActions = {

  receiveCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.CURRENT_USER_RECEIVED,
      currentUser: user
    });
  }
};


module.exports = ServerActions;
