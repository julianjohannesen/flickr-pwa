import React from 'react';
import {Link} from "react-router-dom";

export default function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <Link to="/">Cats</Link>
                </li>
                <li>
                    <Link to="/">Dogs</Link>
                </li>
                <li>
                    <Link to="/">Computers</Link>
                </li>
            </ul>
        </nav>
    );
}
