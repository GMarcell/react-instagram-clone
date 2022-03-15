import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Reset from './components/Reset';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/reset" element={<Reset/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
