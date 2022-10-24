import {
  BrowserRouter,
  Route,
  Routes,  
} from "react-router-dom";
import Nav from "./component/Nav";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/about" element={ <About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
