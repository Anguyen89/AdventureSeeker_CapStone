var AdventureAppUtil = require('../../util/adventure_api_util');


var AdventureClientAction = {

  fetchAdventures: function(){
    AdventureAppUtil.fetchAdventures();
  },

  createAdventure: function(adventure){
    AdventureAppUtil.createAdventure(adventure);
  },

  destroyAdventure: function(adventure){
    AdventureAppUtil.removeAdventure(adventure);
  }
};
