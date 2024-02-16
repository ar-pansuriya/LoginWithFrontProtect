import React from "react";
import "./App.css";
import Form from "./TaskManager/Form";
import SearchAndFilter from "./SearchAndFilter";
import { NavLink, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";


export default function App() {
  return (
    <>
    {/* NavLink from react router dom*/}
      <div className="d-flex fs-3 gap-4 align-align-items-center justify-content-center mb-5">
        <NavLink className="p-2" to="/taskmanager">
          TaskManager
        </NavLink>
        <NavLink className="p-2" to="/searchandfilter">
          Search and Filter
        </NavLink>
        <NavLink className="p-2" to="/home">
          Home
        </NavLink>
        <NavLink className="p-2" to="/about">
          About
        </NavLink>
      </div>

{/* alll Routes */}
      <Routes>
        <Route path="/taskmanager" element={<Form></Form>}></Route>
        <Route path="/" element={<Form></Form>}></Route>
        <Route
          path="/searchandfilter"
          element={<SearchAndFilter></SearchAndFilter>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
      
    </>
  );
}
