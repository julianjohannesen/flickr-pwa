import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink to={`/hedgehogs`} activeClassName="active">
                        Hedgehogs
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`/sloths`}>
                        Sloths
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`/wombats`}>
                        Wombats
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
