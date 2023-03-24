import React from "react";
import Header from "../header/Header";
import Card from "../card/Card";

function Home() {
  return (
    <div>
      <div className="mb-5">
        <h4>Home</h4>
        <Header />
      </div>
      <div className=" mb-5 mt-5" style={{ marginBottom: "200px" }}>
        <Card />
      </div>
    </div>
  );
}

export default Home;
