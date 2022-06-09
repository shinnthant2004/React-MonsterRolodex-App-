import { useState, useEffect } from "react";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
    console.log("filteredMonsters");
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="search-input"
      />
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
};
// import CardList from "./components/card-list/card-list.component";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchWord: "",
//     };
//     console.log("constructor");
//   }
//   componentDidMount() {
//     fetch(`http://jsonplaceholder.typicode.com/users`)
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState(() => {
//           return {
//             monsters: users,
//           };
//         });
//       });
//     console.log("mounted");
//   }

//   render() {
//     console.log("render");
//     const { monsters, searchWord } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchWord);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//           className="search-input"
//         />
//         <CardList monsters={filteredMonsters}></CardList>
//       </div>
//     );
//   }
// }
export default App;
