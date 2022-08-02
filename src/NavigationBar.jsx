import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "./components/Container/Home";
import Characters from "./components/Container/Characters";
import CharacterDetails from "./components/Container/CharacterDetails";
import Episodes from "./components/Container/Episodes";
import Empty from "./components/Container/Empty";

const NavigationBar = () => {
  return (
    <div className="App">
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
};

export default NavigationBar;
