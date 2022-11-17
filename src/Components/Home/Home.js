import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Banner";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
    </div>
  );
};

export default Home;
