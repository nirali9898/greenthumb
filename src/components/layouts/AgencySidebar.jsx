import React from "react";
import { Outlet, Link } from "react-router-dom";
import { AgencyNavbar } from "./AgencyNavbar";

export const AgencySidebar = () => {
  return (
    <>
      <AgencyNavbar />
      <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark" style={{
            marginRight: "-16px",
            marginBottom: "-16px",
            marginLeft: 0,
            top: "-8px",
            right: "auto",
            left: "-8px",
            width: "calc(100% + 16px)",
            padding: 8,
          }}>

        <div className="sidebar-brand">
          <a href="https://example.com" className="brand-link">
            <img
              src="360_F_434579867_ClsXV5zTMwLyNn88VpJPUY7HS7hav1Jy.jpg"
              alt="Placeholder Logo"
              className="brand-image opacity-75 shadow"
            />
          </a>
          <a href="./index.html" className="brand-link">
            <img
              src="../../dist/assets/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image opacity-75 shadow"
            />
            <span className="brand-text fw-light">AdminLTE 4</span>
          </a>
        </div>



        <nav className="mt-2">
          <ul className="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
          <Link to="addscreen" className="nav-link active">
                  <i className="nav-icon bi bi-speedometer" />
                  <p>
                    ADD SCREEN
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </Link>
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                <i className="nav-icon bi bi-house" />
                <p>Home</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-link">
                <i className="nav-icon bi bi-tools" />
                <p>Plants Library</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link">
                <i className="nav-icon bi bi-images" />
                <p>Gallery</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                <i className="nav-icon bi bi-envelope" />
                <p>Contact </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="nav-icon bi bi-info-circle" />
                <p>Shope Plants</p>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="app-main">
        <Outlet />
      </main>
    </>
  );
};
