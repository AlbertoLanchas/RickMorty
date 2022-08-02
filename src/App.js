import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import NavigationBar from "./NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "./components/Container/Home";
import Characters from "./components/Container/Characters";
import CharacterDetails from "./components/Container/CharacterDetails";
import Episodes from "./components/Container/Episodes";
import Empty from "./components/Container/Empty";
import "./App.css";
import Filters from "./components/Pure/Filters/Filters";

function App() {
  return (
    <div className="App">
      <h2 className="text-center my-5">
        Rick & Morty <span className="wiki-color">WIKI</span>
      </h2>
      <BrowserRouter>
        <NavLink to={`/`} key={"home"}>
          HOME
        </NavLink>
        <NavLink to={`/characters`} key={"characters"}>
          CHARACTERS
        </NavLink>
        <NavLink to={`/episodes`} key={"episodes"}>
          EPISODES
        </NavLink>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/characters" element={<Characters></Characters>}></Route>
          <Route
            path="/characters/:id"
            element={<CharacterDetails></CharacterDetails>}
          ></Route>
          <Route path="/episodes" element={<Episodes></Episodes>}></Route>
          <Route path="*" element={<Empty></Empty>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
