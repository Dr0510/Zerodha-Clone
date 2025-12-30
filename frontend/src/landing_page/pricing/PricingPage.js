import React, { useState } from "react";
import Hero from "./Hero";
import Broker from "./Brokerage";
import Tabs from "./Tabs";
import Charges from "./Charges";
import PricingTables from "./PricingTables"
import ChargesExp from "./ChargesExp";

function PricingPage() {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <div className="container py-5">
      <Hero />
      
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "equity" && <Broker />}

      {activeTab === "currency" && (
        <p className="text-center mt-5">Currency charges coming soon</p>
      )}

      {activeTab === "commodity" && (
        <p className="text-center mt-5">Commodity charges coming soon</p>
      )}

      <Charges />
      <PricingTables />
      < ChargesExp />
    </div>
   
  );
}

export default PricingPage;
