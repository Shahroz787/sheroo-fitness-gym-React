import React from "react";
import Contact from "./Components/Contact/Contact";
import Custom from "./Components/Custom/Custom";
import Details from "./Components/Details/Details";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing/Pricing";
import Team from "./Components/Team/Team";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Custom />
      <Details />
      <Team />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
