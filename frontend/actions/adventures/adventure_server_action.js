var Dispatcher = require('../../dispatcher/dispatcher');
var AdventureConstants = require('../../constants/adventure_constants.js');


var AdventureServerActions = {

  receiveAllAdventures: function(adventures){
    Dispatcher.dispatch({
      actionType: AdventureConstants.RECEIVE_ALL_ADVENTURES,
      adventures: adventures
    });
  }
};

module.exports = AdventureServerActions;
