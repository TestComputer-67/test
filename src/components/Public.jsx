import React from "react";



// components
import Header from "./public/Header";
import Hero from "./public/Hero";
import Features from "./public/Features";
import Footer from "./public/Footer";

const Public = () => {
  return (
    <div>
      {/* header kısımı */}
      <Header />

      {/* hero kısımı */}
      <Hero />

      {/* features kısımı */}
      <Features />

      {/* footer kısımı */}
      <Footer />
    </div>
  );
};

export default Public;
