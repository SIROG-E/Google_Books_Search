import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Nav() {
    return (
        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink aria-controls="/" aria-current="true"
                        activeClassName="selected"
                        data-toggle="tab"
                        to="/" 
                        className={window.location.pathname === "/" ? "nav-link" : "nav-link"}>
                        Google Books
            </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink aria-controls="search" aria-current="true"
                        activeClassName="selected"
                        to="/search"
                        data-toggle="tab"
                        className={window.location.pathname === "/search" ? "nav-link " : "nav-link"}
                    >
                        Search
            </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink aria-controls="saved" aria-current="true"
                    activeClassName="selected"
                        to="/saved"
                        data-toggle="tab"
                        className={window.location.pathname === "/saved" ? "nav-link " : "nav-link"}
                    >
                        Saved
            </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;