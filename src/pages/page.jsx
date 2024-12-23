import React from "react";
import Head from "../components/content/head";
import CardList from "../components/content/card/cardList";
import ServiceList from "../components/content/services/serviceList";
import ApreciationList from "../components/content/apreciation/apreciationList";
import About from "../components/content/about";
import Blog from "../components/content/blog/bolg";

export default function Page() {
  return (
    <div>
      <div className="relative z-10">
        <Head />
        <div className="w-full">
          <ApreciationList />
        </div>
      </div>
     <div className="mt-12 ">
        
    <div className="space-y-24">

    <CardList />
    <About />

    <ServiceList />
    <Blog />
    </div>
     </div>
    </div>
  );
}
