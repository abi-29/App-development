import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes for other pages if needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;