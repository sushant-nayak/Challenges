// This is a Functional Component named Practice1
import React from "react"; // makes the JSX work
import "./practice.css";
import challenge from "../../images/Challenge3.png";
import Navbar from "../Navbar/Navbar";
import MainComponent from "../MainComponent/MainComponent";
import Footer from "../Footer/Footer";

function Practice() {
  return (
    <div>
      <Navbar />
      <MainComponent />
      <Footer />
    </div>
  );
}

export default Practice;
