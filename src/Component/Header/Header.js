import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import HeaderTop from "./HeaderTop";
import SolutionsDropdown from "./SolutionsDropdown"; // Import the new dropdown component
import logo from "../Home/Images/logo.png";
const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [navClass, setNavClass] = useState(
    isHomePage
      ? "navbar navbar-expand-lg navbar-dark bg-transparent position-fixed w-100"
      : "navbar navbar-expand-lg navbar-dark bg-light shadow w-100 color"
  );

  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);

  useEffect(() => {
    const updateNavClass = () => {
      setNavClass(
        window.scrollY > 10
          ? "navbar navbar-expand-lg navbar-dark bg-light position-fixed w-100 shadow-sm top-0 color"
          : isHomePage
          ? "navbar navbar-expand-lg navbar-dark bg-transparent position-fixed w-100"
          : "navbar navbar-expand-lg navbar-dark bg-light shadow w-100 color"
      );
    };
    updateNavClass();
    window.addEventListener("scroll", updateNavClass);
    return () => window.removeEventListener("scroll", updateNavClass);
  }, [isHomePage]);

  const menuItems = [
    {
      title: "Products",
      links: [
        { name: "Whatsapp", path: "/whatsapp-api/", icon: "💬" },
        { name: "RCS Service", path: "/rcs-sms/", icon: "📱" },
        { name: "Bulk SMS", path: "/bulk-sms/", icon: "✉️" },
        { name: "Bulk Voice Call", path: "/voice-call/", icon: "📞" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Service", path: "/services/", icon: "🛠️" },
        { name: "Faq", path: "/faq/", icon: "❓" },
        { name: "Blog", path: "/blogs/", icon: "📰" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about/", icon: "🏢" },
        { name: "Contact", path: "/contact/", icon: "📞" },
        { name: "Career", path: "/career/", icon: "💼" },
      ],
    },
  ];

  return (
    <>
   
      <HeaderTop />
      <header>
        <nav className={navClass} style={{ zIndex: 1000 }}>
          <div className="container w-100">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" style={{ height: "60px" }} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-start bg-light w-75"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <Link to="/">
                  <img src={logo} alt="Logo" style={{ height: "60px" }} />
                </Link>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav me-auto  mb-lg-0 ms-2 ">
                  {/* Products Menu */}
                  <li key="products" className="nav-item dropdown me-2  ">
                    <Link
                      className="nav-link dropdown-toggle b-2"
                      to="#"
                      role="button"
                      aria-expanded="false"
                    >
                      Products
                    </Link>
                    <ul className="dropdown-menu shadow ">
                      {menuItems[0].links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            className={`dropdown-item  ${
                              location.pathname === link.path ? "active" : ""
                            }`}
                            to={link.path}
                          >
                            <span className="me-2">{link.icon}</span>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {/* Solutions Dropdown */}
                  <li
                    className="nav-item dropdown me-2"
                    onMouseEnter={() => setShowSolutionsDropdown(true)}
                    onMouseLeave={() => setShowSolutionsDropdown(false)}
                  >
                    <span className="nav-link dropdown-toggle" role="button">
                      Solutions
                    </span>
                    {showSolutionsDropdown && <SolutionsDropdown />}
                  </li>

                  {/* Remaining Menu Items */}
                  {menuItems.slice(1).map((menu, index) => (
                    <li key={index} className="nav-item dropdown me-2">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="#"
                        role="button"
                        aria-expanded="false"
                      >
                        {menu.title}
                      </Link>
                      <ul className="dropdown-menu shadow">
                        {menu.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link
                              className={`dropdown-item ${
                                location.pathname === link.path ? "active" : ""
                              }`}
                              to={link.path}
                            >
                              <span className="me-2">{link.icon}</span>
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>

                <div className="btn-header  gap-3 ">
                  <Link
                    to="/try-for-free/"
                    className="btn btn-primary px-4 buton fw-bold pt-2"
                  >
                    Try For Free
                  </Link>
                  <Link
                    to="/request-demo/"
                    className="btn btn-outline-primary px-4 buton fw-bold pt-2"
                  >
                    Request Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
