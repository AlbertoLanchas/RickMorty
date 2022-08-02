import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "./components/Home";
import Characters from "./components/Characters";
import CharacterDetails from "./components/CharacterDetails";
import Episodes from "./components/Episodes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to={`/home`} key={"home"}>
          HOME
        </NavLink>
        <NavLink to={`/characters`} key={"characters"}>
          CHARACTERS
        </NavLink>
        <NavLink to={`/episodes`} key={"episodes"}>
          EPISODES
        </NavLink>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/characters" element={<Characters></Characters>}></Route>
          <Route
            path="/characters/:id"
            element={<CharacterDetails></CharacterDetails>}
          ></Route>
          <Route path="/episodes" element={<Episodes></Episodes>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
