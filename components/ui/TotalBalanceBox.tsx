import React from "react";
import AutomatedCounter from "./AutomatedCounter";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">{/* Chart */}</div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts: {totalBanks}</h2>

        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total current Balance</p>
          <div className="total-balance-amount flex-center gap-2">
            <AutomatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
