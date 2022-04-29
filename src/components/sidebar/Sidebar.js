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
              color: isActive ? "#ECC5FA" : "#aaa",
              backgroundColor: isActive ? "rgba(236, 197, 250, 0.1)" : "",
              fontSize: isActive ? "130%" : "100%",
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
