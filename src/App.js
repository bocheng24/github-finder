import { 
          BrowserRouter,
          Routes,
          Route, 
        } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className='flex justify-around'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='about' element={ <About /> } />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
