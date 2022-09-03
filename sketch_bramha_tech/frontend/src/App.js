import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Addproject from "../components/ProjectAdd/Addproject";
import Editproject from "../components/ProjectAdd/Editproject";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {isLoggedIn && <Route path="/dashboard" element={<Dashboard/>} />}{" "}
          {isLoggedIn && <Route path="/project/add" element={<Addproject/>} />}{" "}
          {isLoggedIn && <Route path="/project/edit/:id" element={<Editproject/>} />}{" "}


        </Routes>
      </main>
    </>
  );
}

export default App;
