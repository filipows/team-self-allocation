App = React.createClass({
  render() {
    return (
      <div className="container">
        <header>
          <h1>Self Allocation</h1>
        </header>

        <ProjectAllocations />
        <hr />
        <YourAllocations />
      </div>
    );
  }
});
