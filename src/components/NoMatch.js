import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function NoMatch() {
    let location = useLocation();
    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>. 
            </h3>
            <p>Return <Link to="/">home</Link>.</p>
        </div>
    );
}
