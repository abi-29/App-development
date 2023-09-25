import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Privacy from "./pages/Privacy";
import Faq from "./pages/Faq";
import Pets from "./pages/Pets";
import Food from "./pages/Food";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/pets" element={<Pets/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/food" element={<Food/>}/>
      </Routes>
    </Router>
  );
}
export default App;

