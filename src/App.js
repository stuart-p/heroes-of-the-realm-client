import React from "react";
import { Observer } from "mobx-react";
import { status } from "./stores/load";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header-components/Header";
import LandingPage from "./components/LandingPage-components/LandingPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JobBoard from "./components/JobBoard-Components/JobBoard";
import AdventurerRankingPage from "./components/AdventurerRanking/AdventurerRankingPage";
import AdventurerEditPage from "./components/AdventurerRanking/AdventurerEditPage";
import LoadingScreen from "./components/UI-components/LoadingScreen";

function App() {
  return (
    <>
      <Header />
      <ToastContainer
        position="bottom-left"
        hideProgressBar={false}
        autoClose={3000}
        closeOnClick
        pauseOnHover={false}
        pauseOnVisibilityChange={false}
        pauseOnFocusLoss={false}
        draggable={false}
        className="standardToastStyle"
      />
      <Observer>{() => status.isLoading && <LoadingScreen />}</Observer>
      <Router className="main">
        <LandingPage path="/" />
        <JobBoard path="/quests/*" />
        <AdventurerRankingPage path="/adventurers/*" />
        <AdventurerEditPage path="/profile" />
      </Router>
    </>
  );
}

export default App;
