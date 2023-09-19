import logo from './logo.svg';
import './App.css';

//hasne
import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Privacy from './components/privacy';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Navigate to={"/privacy"} />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
