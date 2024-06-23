import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tools from "./components/Tools";
import YouTube from "./components/Youtube";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="grid grid-cols-1 md:grid-cols-2">
        <Tools />
        <YouTube />
      </div>

      <Footer />
    </>
  );
};

export default App;
