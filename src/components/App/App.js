import React from "react";
import "./App.css";
import Header from "../Header/Header";
// import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Profile /> */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
