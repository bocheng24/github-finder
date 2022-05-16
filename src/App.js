import { 
          BrowserRouter,
          Routes,
          Route, 
        } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className='flex'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='about' element={ <About /> } />
            <Route path='/notfound' element={ <NotFound /> } />
            <Route path='/*' element={ <NotFound /> } />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
