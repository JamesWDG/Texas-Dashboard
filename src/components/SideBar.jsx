import React, { useEffect, useState } from "react";

const SideBar = () => {
  const [menuItems, setMenuItems] = useState([]);

  const sidebarData = [
    {
      label: "Dashboard",
      icon: "src/assets/images/sidebar-img1.png",
      link: "/dashboard",
    },
    {
      label: "Users",
      icon: "src/assets/images/sidebar-img2.png",
      link: "/users",
    },
    {
      label: "Flight Validation",
      icon: "src/assets/images/sidebar-img3.png",
      link: "/flight-validation",
    },
    {
      label: "Pilots Logs",
      icon: "src/assets/images/sidebar-img4.png",
      link: "/pilot-logs",
    },
    {
      label: "Flight Log & Reports",
      icon: "src/assets/images/sidebar-img5.png",
      link: "/flight-reports",
    },
    {
      label: "Reports & Statistics",
      icon: "src/assets/images/sidebar-img6.png",
      link: "/reports",
    },
    {
      label: "Data Filters & Controls",
      icon: "src/assets/images/sidebar-img7.png",
      link: "/filters",
    },
    {
      label: "User Alerts",
      icon: "src/assets/images/sidebar-img8.png",
      link: "/alerts",
    },
    {
      label: "Operations Dashboard",
      icon: "src/assets/images/sidebar-img9.png",
      link: "/operations",
    },
    {
      label: "Admin Settings",
      icon: "src/assets/images/sidebar-img10.png",
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
          <img src="src/assets/images/logo.png" alt="Logo" />
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
