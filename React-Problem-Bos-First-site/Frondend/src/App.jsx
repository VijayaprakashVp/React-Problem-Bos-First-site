import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CreateEntity } from "./Components/CreateEntity";
import { EntityID } from "./Components/EntityID";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/register" element={<Register}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/listing/:id" element={<EntityID />}></Route>
        <Route path="/listing/create" element={<CreateEntity />}></Route>
      </Routes>
    </div>
  );
}

export default App;
