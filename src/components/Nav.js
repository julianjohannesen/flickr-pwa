import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav({ liftUpQuery }) {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink
                        onClick={()=>liftUpQuery('hedgehogs')}
                        to={`/?query=hedgehogs`}
                        activeClassName="active"
                    >
                        Hedgehogs
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={()=>liftUpQuery('sloths')}
                        to={`/?query=sloths`}
                    >
                        Sloths
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={()=>liftUpQuery('wombats')}
                        to={`/?query=wombats`}
                    >
                        Wombats
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
