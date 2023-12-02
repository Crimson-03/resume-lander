import React from "react";
import Home from "../Home/Home";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  const { role } = useParams();
  return (
    <div>
      <section id="home">
        <Navbar role={role} />
        <Home />
      </section>
    </div>
  );
};

export default Main;
