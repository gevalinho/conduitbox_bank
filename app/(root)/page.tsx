import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggin = { firstName: "Geval" };
  return (
    <div className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggin?.firstName || "Guest"}
          subtext="Access and manage your transactions"
        />
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={12345000}
        />
      </div>
    </div>
  );
};

export default Home;
