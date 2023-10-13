import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { DASHBOARD_SIDEBAR_LINKS } from "../lib/consts/navigation";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline";
const Sidebar = () => {
  return (
    <div className="bg-[#FCA311] w-60 p-3 flex flex-col text-white">
      <div className="flex items-center gap-2 px-1 py-3">
        <Link to="/">
          <img src={Logo} className="flex-shrink-0 h-10 w-12" />
        </Link>
        <span className="sr-only">StyleMe App</span>
        <span className="text-neutral-100 text-lg font-['Outfit'] not-italic font-bold leading-normal">
          StyleMe
        </span>
      </div>
      <div className="flex-1">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key}>{item.label}</SidebarLink>
        ))}
      </div>
      <div>bottom part</div>
    </div>
  );
};

export default Sidebar;

function SidebarLink({ item }) {
  return (
    <Link to={item.path} className={linkClasses}>
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
