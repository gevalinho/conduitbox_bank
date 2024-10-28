import HeaderBox from "@/components/ui/HeaderBox";
import RightSidebar from "@/components/ui/RightSidebar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggin = {
    firstName: "Geval",
    lastName: "Egbe",
    email: "gevalinho1@gmail.com",
  };
  return (
    <section className="home lg:pl-72">
      <div className="home-content">
        <header className="home-header">
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
        </header>
        Transactions
      </div>
      <RightSidebar
        user={loggin}
        transaction={[]}
        banks={[{ currentBalance: 345.0 }, { currentBalance: 700.0 }]}
      />
    </section>
  );
};

export default Home;
