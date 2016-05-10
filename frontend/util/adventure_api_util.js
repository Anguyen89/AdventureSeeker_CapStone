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
  },

  createAdventure: function(adventure){
    $.ajax({
      type: 'POST',
      url: 'api/adventures',
      success: function(){
        AdventureServerActions.receiveOneAdventure(adventure);
      }
    });
  },

  removeAdventure: function(adventure){
    $.ajax({
      type: 'DELETE',
      url: 'api/adventures/' + adventure.id,
      success: function(){
        AdventureServerActions.removeAdventure(adventure);
      }
    });
  }
};


module.exports = AdventureAppUtil;
