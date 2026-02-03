import React, { useEffect, useState } from "react";

const SideBar = () => {
  const [menuItems, setMenuItems] = useState([]);

  const sidebarData = [
    {
      label: "Dashboard",
      icon: "/images/sidebar-img1.png",
      link: "/dashboard",
    },
    {
      label: "Users",
      icon: "/images/sidebar-img2.png",
      link: "/users",
    },
    {
      label: "Flight Validation",
      icon: "/images/sidebar-img3.png",
      link: "/flight-validation",
    },
    {
      label: "Pilots Logs",
      icon: "/images/sidebar-img4.png",
      link: "/pilot-logs",
    },
    {
      label: "Flight Log & Reports",
      icon: "/images/sidebar-img5.png",
      link: "/flight-reports",
    },
    {
      label: "Reports & Statistics",
      icon: "/images/sidebar-img6.png",
      link: "/reports",
    },
    {
      label: "Data Filters & Controls",
      icon: "/images/sidebar-img7.png",
      link: "/filters",
    },
    {
      label: "User Alerts",
      icon: "/images/sidebar-img8.png",
      link: "/alerts",
    },
    {
      label: "Operations Dashboard",
      icon: "/images/sidebar-img9.png",
      link: "/operations",
    },
    {
      label: "Admin Settings",
      icon: "/images/sidebar-img10.png",
      link: "/settings",
    },
  ];


  useEffect(() => {

    setMenuItems(sidebarData);
  }, []);

  return (
    <div className="sidebar linear-bg">
      <div className="logo-area">
        <a href="/">
          <img src="/images/logo.png" alt="Logo" />
        </a>
      </div>

      <ul className="p-0 m-0">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.link}>
              <img src={item.icon} alt={item.label} />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
