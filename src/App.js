import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
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
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          className="search-input"
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
export default App;
