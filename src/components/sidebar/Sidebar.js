import BusesIcon from "components/buses-icon/BusesIcon";
import CreditCard from "components/credit-card/CreditCard";
import HomeIcon from "components/home-icon/HomeIcons";
import PersonIcon from "components/person-icon/PersonIcon";
import React from "react";

import { NavLink } from "react-router-dom";

import sidebarStyles from "./sidebar.module.scss";

export default function Sidebar() {
  return (
    <div className={sidebarStyles.sidebar}>
      <div>
        {[
          { name: "home", icon: <HomeIcon /> },
          { name: "transactions", icon: <CreditCard /> },
          { name: "buses", icon: <BusesIcon /> },
          { name: "drivers", icon: <PersonIcon /> },
        ].map((route, index) => (
          <NavLink
            to={`/${route.name}`}
            key={route.name}
            style={({ isActive }) => ({
              color: isActive ? "#934444" : "#333",
              backgroundColor: isActive ? "rgba(147, 68, 68, 0.1)" : "",
            })}
          >
            {route.icon}
            <span>{route.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
