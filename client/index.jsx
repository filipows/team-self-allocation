Meteor.subscribe('/Projects/get', 'all');
Meteor.subscribe('/Allocations/get', 'all');
Meteor.subscribe('/Users/get');

Meteor.startup(function () {
  React.render(<App />, document.getElementById('app'));
});
