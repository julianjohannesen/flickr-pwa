import React from 'react';
import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>Your search did not return any results. Please <Link to='/' >try again</Link>.</p>
        </li>
    );
}
