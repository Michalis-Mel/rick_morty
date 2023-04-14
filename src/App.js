import { Route, Routes } from "react-router-dom";

//PAGES AND COMPONENTS
import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/:id" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
