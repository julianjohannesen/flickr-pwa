import React from 'react';
import {NavLink} from "react-router-dom";

export default function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink to="/most-faved" activeClassName="active">Most<br/>Faved</NavLink>
                </li>
                <li>
                    <NavLink to="/most-viewed">Most<br/>Viewed</NavLink>
                </li>
                <li>
                    <NavLink to="/most-ratioed">Most<br/>Ratio'ed</NavLink>
                </li>
            </ul>
        </nav>
    );
}
