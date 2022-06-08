import "./App.css";
// import { Component } from "react";

const App = () => {
  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      {/* <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          className="search-input"
        />
        <CardList monsters={filteredMonsters}></CardList> */}
    </div>
  );
};
// import CardList from "./components/card-list/card-list.component";
// import SearchBox from "./components/search-box/search-box.component";
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
//   onSearchChange = (event) => {
//     const searchWord = event.target.value.toLowerCase();
//     this.setState(() => {
//       return {
//         searchWord,
//       };
//     });
//   };
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
