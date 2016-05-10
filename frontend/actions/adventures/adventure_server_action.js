var Dispatcher = require('../../dispatcher/dispatcher');
var AdventureConstants = require('../../constants/adventure_constants.js');


var AdventureServerActions = {

  receiveAllAdventures: function(adventures){
    Dispatcher.dispatch({
      actionType: AdventureConstants.RECEIVE_ALL_ADVENTURES,
      adventures: adventures
    });
  },

  receiveOneAdventure: function(adventure){
    Dispatcher.dispatch({
      actionType: AdventureConstants.RECEIVE_ONE_ADVENTURE,
      adventure: adventure
    });
  },

  removeAdventure: function(adventure){
    Dispatcher.dispatch({
      actionType: AdventureConstants.REMOVE_ADVENTURE,
      adventure: adventure
    });
  }


};

module.exports = AdventureServerActions;
