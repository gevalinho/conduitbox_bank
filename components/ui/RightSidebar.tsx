import Image from "next/image";
import Link from "next/link";
import React from "react";
import BankCard from "./BankCard";

const RightSidebar = ({ user, transaction, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">
              {user.name[0]}
            </span>
          </div>
          <div className="profile-details">
            <h1 className="profile-name">{user.name}</h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
      </section>
      <section className="banks">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Banks</h2>
          <Link href="/" className="flex gap-2">
            <Image src={"/icons/plus.svg"} alt="plus" width={20} height={20} />
            <span className="text-blue-500 font-semibold">Add Bank</span>
          </Link>
        </div>
        {banks?.length > 0 && (
          <div className="relative flex flex1 flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <BankCard
                key={banks[0].$id}
                account={banks[0]}
                userName={user.name}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard
                  key={banks[1].$id}
                  account={banks[1]}
                  userName={user.name}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
};

export default RightSidebar;
