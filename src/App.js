import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header-components/Header";
import LandingPage from "./components/LandingPage-components/LandingPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JobBoard from "./components/JobBoard-Components/JobBoard";

function App() {
  return (
    <>
      <Header />
      <ToastContainer position="top-left" hideProgressBar={false} />
      <Router className="main">
        <LandingPage path="/" />
        <JobBoard path="/jobs" />
      </Router>
    </>
  );
}

export default App;
