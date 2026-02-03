import React, { useEffect, useState } from "react";

const Header = () => {
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState({
    alerts: false,
    messages: false,
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    // fetch("/api/header")
    //   .then(res => res.json())
    //   .then(data => {
    //     setUser(data.user);
    //     setNotifications(data.notifications);
    //   });

    setUser({
      name: "Sharlette",
      role: "Administrator",
      avatar: "/images/logo.png",
    });

    setNotifications({
      alerts: true,
      messages: true,
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Query:", search);
  };

  return (
    <header className="header">
      <div className="d-flex justify-content-between align-items-center">
        <div className="form-wrapper">
          <form onSubmit={handleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              placeholder="Search by Flight Number, Aircraft or Captain Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>

        <div className="notification-area d-flex align-items-center">
          <div className="notification">
            <a href="#" className="text-black position-relative">
              <i className="fa-solid fa-bell"></i>
              {notifications.alerts && (
                <span className="header-badge">•</span>
              )}
            </a>
          </div>

          <div className="notification">
            <a href="#" className="text-black position-relative">
              <i className="fa-solid fa-message"></i>
              {notifications.messages && (
                <span className="header-badge">•</span>
              )}
            </a>
          </div>

          {user && (
            <div className="person-area">
              <a href="#">
                <img src={user.avatar} alt={user.name} />
                <div>
                  <p className="person-name">{user.name}</p>
                  <p className="person-role">{user.role}</p>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
