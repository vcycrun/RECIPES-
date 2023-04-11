import Single from "./pages/single/Single"
import Write from "./pages/write/Write"
import Settings from "./pages/settings/Settings"
import Login from "./pages/login/Login"
import Register from "./pages/register//Register"
import Home from "./pages//home/Home"
import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";
import { useContext } from "react";

// import React from "react";
// import {
//   BrowserRouter as
//   Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom"


function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/posts" element={<Home />}>
        </Route>
        <Route path="/register" element= {user ? <Home /> : <Register />}>
        </Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route path="/post/:id" element={<Single />}>
        </Route>
        <Route path="/write" element={user ? <Write /> : <Login />}></Route>
        <Route path="/settings" element={user ? <Settings /> : <Login />}>
        </Route>
      </Routes>
    </Router>
  );
}
export default App;

