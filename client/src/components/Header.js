import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css"
import { Link } from "react-router-dom";
const Header = (props) => {
  const Navigate = useNavigate();
  const handleSubmit = () => {
    Navigate("/login");
  };
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a
          className="navbar-brand"
          style={{
            fontFamily: "Great Vibes",
            fontSize: "35px",
            color: "purple",
          }}
          href="/"
        >
          Family Restaurant
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/addmenulist">
                Menu<span className="sr-only"></span>
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn-3"
              onClick={handleSubmit}
              type="submit"
            >
         Login
            </button>
          </form>
        </div>
      </nav>
      <Link to={`/menus`} className="btn1">
       Today's Menu
      </Link>
    </div>
  );
};

export default Header;
