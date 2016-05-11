var React = require('react');


var AdventureIndexItem = React.createClass({

  render: function(){
    return (
    <div>
      <ul>
        <li className="adventure_title">{this.props.adventure.title}</li>
        <li className="adventure_description">{this.props.adventure.description}</li>
      </ul>
    </div>

  );
  }
});


module.exports = AdventureIndexItem;
