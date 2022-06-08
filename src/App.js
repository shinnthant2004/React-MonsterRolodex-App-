import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchWord: "",
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
  onSearchChange = (event) => {
    const searchWord = event.target.value.toLowerCase();
    this.setState(() => {
      return {
        searchWord,
      };
    });
  };
  render() {
    const { monsters, searchWord } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchWord);
    });

    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
export default App;
