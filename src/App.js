import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignupPage from "./pages/SignUp";
import Layout from "./components/Layout";
import Investor from "./pages/Investor";
import BecomeHost from "./pages/BecomeHost";
import GetTheApp from "./pages/GetTheApp";
import CarList from "./pages/CarList";
import PrivateRoute from "./pages/PrivateRoute";
import { PageNotFound } from "./components/PageNotFound";
import DriverList from "./pages/DriverList";
import UserList from "./pages/UserList";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard"element={<PrivateRoute><Layout /></PrivateRoute>}/>
        <Route path="/inves"element={<PrivateRoute><Investor /></PrivateRoute>}/>
        <Route path="/behost"element={<PrivateRoute><BecomeHost /></PrivateRoute>}/>
        <Route path="/getapp"element={<PrivateRoute><GetTheApp /></PrivateRoute>}/>
        <Route path="/car"element={<PrivateRoute><CarList /></PrivateRoute>}/>
        {/* <Route path="/driverlist"elment={<PrivateRoute><DriverList/></PrivateRoute>}/> */}
        <Route path="/driverlist" element={<DriverList/>}/>
        <Route path="/userlist" element={<UserList/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;

