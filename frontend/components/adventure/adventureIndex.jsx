var React = require('react');
var AdventureStore = require('../../stores/adventure_store');
var UserStore = require('../../stores/user_store');
var AdventureClientAction = require('../../actions/adventures/adventure_client_action');


var AdventureIndexItem = require('./adventureIndexItem');

var AdventureIndex = React.createClass({


  getInitialState: function(){
    return({ adventures: AdventureStore.all()});
  },

  componentDidMount: function(){
    this.adventureListener = AdventureStore.addListener(this.__onChange);
    // this.userListener = UserStore.addListener(this.__onChange);
    AdventureClientAction.fetchAdventures();

  },

  componentWillUnmount: function(){
    this.adventureListener.remove();
  },

  __onChange: function(){
    this.setState({ adventures: AdventureStore.all()});
  },

  render: function(){
    var _adventures = this.state.adventures.map(function(adventure){
      return (
        <AdventureIndexItem adventure={adventure} key={adventure.id}></AdventureIndexItem>
      );
    });

    return (
      <div>
        <ul>
          {_adventures}
        </ul>
      </div>
    );
  }
});

module.exports = AdventureIndex;
