import React from 'react';
import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <li className="not-found">
            <h3>No Results Found</h3>
            <p><Link to='/' >Return home</Link>.</p>
        </li>
    );
}
