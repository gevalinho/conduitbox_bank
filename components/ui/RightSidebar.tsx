import React from "react";

const RightSidebar = ({ user, transaction, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
      </section>
    </aside>
  );
};

export default RightSidebar;
