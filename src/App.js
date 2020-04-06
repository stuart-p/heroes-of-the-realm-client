import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header-components/Header";
import LandingPage from "./components/LandingPage-components/LandingPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JobBoard from "./components/JobBoard-Components/JobBoard";
import AdventurerRankingPage from "./components/AdventurerRanking/AdventurerRankingPage";

function App() {
  return (
    <>
      <Header />
      <ToastContainer position="top-left" hideProgressBar={false} />
      <Router className="main">
        <LandingPage path="/" />
        <JobBoard path="/quests/*" />
        <AdventurerRankingPage path="/adventurers/*" />
      </Router>
    </>
  );
}

export default App;
