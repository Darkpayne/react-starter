import {
  BrowserRouter,
  Route,
  Routes,  
} from "react-router-dom";
import Nav from "./component/Nav";
import About from "./pages/About";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* without the navbar */}
        <Route path="/about" element={ <About/>} />
        <Route path="/signin" element={ <Signin/>} />
        <Route path="/signup" element={ <Signup/>} />
        {/* with the navbar */}
        <Route element={ <AppLayout/> } >
          <Route path="/" element={ <Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
