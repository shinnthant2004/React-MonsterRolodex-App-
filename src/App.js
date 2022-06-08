import "./App.css";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch(`http://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return {
            monsters: users,
          };
        });
      });
  }
  render() {
    return <div className="App"></div>;
  }
}
export default App;
