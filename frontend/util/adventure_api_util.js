var AdventureServerActions = require('../actions/adventures/adventure_server_action');


var AdventureAppUtil = {

  fetchAdventures: function(){
    $.ajax({
      type: 'GET',
      url: 'api/adventures',
      success: function(adventures){
        AdventureServerActions.receiveAllAdventures(adventures);
      }
    });
  }
};


module.exports = AdventureAppUtil;
