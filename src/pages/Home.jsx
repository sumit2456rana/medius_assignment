import React from "react"
import NavBar from "../components/Navbar";
import HomeContent from "../components/HomeContent";

function Home() {
  return (
    <div>
      <NavBar />
      <section className="bg-primaryGreen">
        <HomeContent />
      </section>
    </div>
  )
};

export default Home;
