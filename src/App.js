// import logo from './logo.svg';
// import './App.css';

//Import following components for Shopify Project
import Navigation from './components/Navigation'
import Home from './components/Home'
import RedPill from './components/RedPill'
import BluePill from './components/BluePill'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>

          <Route path="/" exact element={<Home />} />
          <Route path="/red-pill" exact element={<RedPill />} />
          <Route path="/blue-pill" exact element={<BluePill />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
















