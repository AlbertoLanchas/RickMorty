import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import CharacterDetails from "./Pages/CharacterDetails";
import Episodes from "./Pages/Episodes";
import Empty from "./Pages/Empty";
import "./App.css";
import Location from "./Pages/Location";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/characters" element={<Characters></Characters>}></Route>
          <Route
            path="/characters/:id"
            element={<CharacterDetails></CharacterDetails>}
          ></Route>
          <Route path="/episodes" element={<Episodes></Episodes>}></Route>
          <Route
            path="/episodes/:id"
            element={<CharacterDetails></CharacterDetails>}
          ></Route>
          <Route path="/locations" element={<Location></Location>}></Route>
          <Route
            path="/locations/:id"
            element={<CharacterDetails></CharacterDetails>}
          ></Route>
          <Route path="*" element={<Empty></Empty>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
