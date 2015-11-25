var React = require("react");
var ReactDOM = require("react-dom");

var App = React.createClass({
  render() {
    return <h1>Hello working</h1>;
  }
})

ReactDOM.render(<App/>, document.getElementById('example'));