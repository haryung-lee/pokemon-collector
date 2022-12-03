import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './fonts/font.css';
import { GlobalStyle } from './styles/globalStyle';
import Main from './pages/Main';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
