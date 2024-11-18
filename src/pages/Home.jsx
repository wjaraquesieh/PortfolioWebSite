import React from "react";
import Work from "./Work";
import Information from "./Information";
import Skills from "./Skills";


const Home = () => (
  <>
     <section id="basicInfo" className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Basic Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
          <Information />
        </div>
      </div>
    </section>
  </>
);

export default Home;
