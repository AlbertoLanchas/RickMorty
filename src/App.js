import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={Home}></Route>
          <Route path="/characters" element={Characters}></Route>
          <Route path="/characters/:id" element={Characters}></Route>
          <Route path="/episodes" element={Episodes}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
