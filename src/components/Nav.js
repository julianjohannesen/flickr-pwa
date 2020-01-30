import React from 'react';
import {NavLink} from "react-router-dom";

export default function Nav({match}) {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink to={`/nav/hedgehogs`} activeClassName="active">Hedgehogs</NavLink>
                </li>
                <li>
                    <NavLink to={`/nav/sloths`} >Sloths</NavLink>
                </li>
                <li>
                    <NavLink to={`/nav/wombats`}>Wombats</NavLink>
                </li>
            </ul>
        </nav>
    );
}
