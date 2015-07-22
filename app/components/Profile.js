var React = require('react');
var Router = require('react-router');

var Profile = React.createClass({
  mixins: [Router.State],

  getInitialState: function() {
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },

  render: function() {
    var username = this.getParams().username; // Call it username because we named it this in routes.js
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes username={username} notes={this.state.notes} />
        </div>
      </div>
    )
  }
});

module.exports = Profile;
