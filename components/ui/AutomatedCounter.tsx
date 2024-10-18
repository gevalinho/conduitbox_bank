"use client";
import React from "react";
import CountUp from "react-countup";

const AutomatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        end={amount}
        duration={2.75}
        decimal=","
        prefix="NGN "
        decimals={2}
      />
    </div>
  );
};

export default AutomatedCounter;
