import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg`}
      style={{
        backgroundColor: props.navColor,
        color: props.textColor,
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active" aria-current="page">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button cla
                        ssName="btn btn-primary" type="submit">Search</button>
                    </form> */}
          <div className="d-flex">
            <label htmlFor="exampleColorInput" className="form-label">
              Pick BackGround Color
            </label>
            <input
              type="color"
              className="form-control form-control-color"
              id="exampleColorInput"
              value="#ffffff"
              onChange={(e) => props.changeBGcolor(e)}
              title="Choose your color"
            ></input>
          </div>
          <div className="d-flex">
            <label htmlFor="exampleColorInput" className="form-label">
              Pick Text Color
            </label>
            <input
              type="color"
              className="form-control form-control-color"
              id="exampleColorInput"
              value="#000000"
              onChange={(e) => props.changeTextcolor(e)}
              title="Choose your color"
            ></input>
          </div>
          <div className="d-flex">
            <label htmlFor="exampleColorInput" className="form-label">
              Pick NavBar Color
            </label>
            <input
              type="color"
              className="form-control form-control-color"
              id="exampleColorInput"
              value="#ffffff"
              onChange={(e) => props.changeNavcolor(e)}
              title="Choose your color"
            ></input>
          </div>

          {/* <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable DarkMode
            </label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
