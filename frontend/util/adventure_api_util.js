var AdventureServerActions = require('../actions/adventures/adventure_server_action');


module.exports = {

  fetchAdvenutures: function(){
    $.ajax({
      type: 'GET',
      url: 'api/adventures',
      success: function(adventures){
        AdventureServerActions.receiveAdventures(adventures);
      }
    });
  }
};
