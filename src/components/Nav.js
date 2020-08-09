import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink 
                        to={{
                            pathname: "/hedgehogs",
                            state: "Hedgehogs"
                        }} 
                        activeClassName="active"
                    >
                        Hedgies
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={{
                            pathname: "/sloths",
                            state: "Sloths"
                        }} 
                    >
                        Sloths
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={{
                            pathname: "/wombats",
                            state: "Wombats"
                        }} 
                    >
                        Wombats
                    </NavLink>
                </li>
                
            </ul>
        </nav>
    );
}
