import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignupPage from './pages/SignUp';
import Layout from './components/Layout';
import Investor from './pages/Investor';
import BecomeHost from './pages/BecomeHost';
import GetTheApp from './pages/GetTheApp';
import CarList from './pages/CarList';
import Protected from './components/Protected';

function App() {
  const [isLogged, setIsLogged] = useState(true);

  return (
      <Router>
        <Routes>
          <Route path="/" element={<SignIn onLogin={() => setIsLogged(true)} />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route path="/dashboard" element={<Protected isLogged={isLogged}> <Layout /> </Protected>} />
          <Route path="/inves" element={<Protected isLogged={isLogged}> <Investor /> </Protected>} />
          <Route path="/behost" element={<Protected isLogged={isLogged}> <BecomeHost /> </Protected>} />
          <Route path="/getapp" element={<Protected isLogged={isLogged}> <GetTheApp /> </Protected>} />
          <Route path="/car" element={<Protected isLogged={isLogged}> <CarList /> </Protected>} />
        </Routes>
      </Router>
  );
}

export default App;
