var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');

var UserStore = new Store(AppDispatcher);

var _allUsers = [];
var _currentUser = undefined;

UserStore.currentUser = function(){
  return _currentUser;
};

var updateCurrentUser = function(user){
  if (user.id){
    _currentUser = user;
  }else{
    _currentUser = undefined;
  }
  UserStore.__emitChange();
};

var logoutUser = function(){
  _currentUser = undefined;
  UserStore.__emitChange();
};

// var updateAllUsers = function(users){
//   if (users){
//     _allUsers = users;
//   }else{
//     _allUsers = [];
//   }
// };

// UserStore.allUsers = function(){
//   return _allUsers;
// };


UserStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case(UserConstants.CURRENT_USER_RECEIVED):
      updateCurrentUser(payload.user);
      break;
    case(UserConstants.LOGOUT_CURRENT_USER):
      logoutUser();
      break;

  }
};

module.exports = UserStore;
