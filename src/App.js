import {
  BrowserRouter,
  Route,
  Routes,  
} from "react-router-dom";
import Nav from "./component/Nav";
import About from "./pages/About";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* without the navbar */}
        <Route path="/about" element={ <About/>} />
        {/* with the navbar */}
        <Route element={ <AppLayout/> } >
          <Route path="/" element={ <Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
