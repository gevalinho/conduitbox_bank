import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BankCard = ({
  accounts,
  showBalance = true,
  userName,
}: CreditCardProps) => {
  return (
    <div className="flex fles-col">
      <Link href={"/"} className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {accounts.name || userName}
            </h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {formatAmount(accounts.currentBalance)}
            </p>
          </div>
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">{userName}</h1>
              <h2 className="text-12 font-semibold text-white">●● / ●●</h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-16">1234</span>
            </p>
          </article>
        </div>
        <div className="bank-card_icon">
          <Image
            src="/icons/Paypass.svg"
            width={20}
            height={20}
            alt="paypass"
          />
          <Image
            src="/icons/mastercard.svg"
            width={20}
            height={20}
            alt="mastercard"
            className="ml-5"
          />
        </div>
      </Link>
    </div>
  );
};

export default BankCard;
