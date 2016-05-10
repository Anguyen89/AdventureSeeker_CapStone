var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var AdventureConstants = require('../constants/adventure_constants');

var AdventureStore = new Store(AppDispatcher);

var _adventures = {};

var resetAdventures = function(adventures){
  _adventures = {};
  adventures.forEach(function(adventure){
    _adventures[adventure.id] = adventure;
  });
  // console.log(_adventures);
  AdventureStore.__emitChange();

};

var addAdventure = function(adventure){
  _adventures[adventure.id] = adventure;
  AdventureStore.__emitChange();
};

var removeAdventure = function(adventure){
  delete _adventures[adventure.id];
  AdventureStore.__emitChange();
};


AdventureStore.all = function(){
  var allAdventures = [];
  Object.keys(_adventures).forEach(function(key){
    allAdventures.push(_adventures[key]);
  });
  return allAdventures;
};

AdventureStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case(AdventureConstants.RECEIVE_ALL_ADVENTURES):
    resetAdventures(payload.adventures);
    break;
    case(AdventureConstants.RECEIVE_ONE_ADVENTURE):
    addAdventure(payload.adventure);
    break;
    case(AdventureConstants.REMOVE_ADVENTURE):
    removeAdventure(payload.adventure);
    break;
  }
};

module.exports = AdventureStore;
