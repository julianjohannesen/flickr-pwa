import React from 'react';

export default function Photo({ photo }) {
    return (
        <li>
            <img src={photo.url_s} alt={photo.title} />
        </li>
    );
}
