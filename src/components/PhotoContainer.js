import React from 'react';
import uuidv4 from 'uuid/v4';
import Photo from './Photo';

export default function PhotoContainer(props) {
    // Response structure
    // The object has two properties: photos, and stat. photos has page, pages, perpage, total, and photo properties. photos.photo is an array of photo objects. Each photo has a lot of properties, but the interesting ones to me are: title, description._content, o_width, o_height, datetaken, ownername, tags, and then all of the urls for different versions with height and width for each

    // Map over the photos array and call Photo for each photo
    const generatePhotos = props => {
        // Store the photos array or else store an array with a single error object
        const photos = props.data?.photos?.photo || false;
        if (photos) {
            return photos.map(photo => <Photo photo={photo} key={uuidv4()} />);
        } else {
            return (
                <li className="not-found">
                    <h3>No Results Found</h3>
                    <p>
                        Your search did not return any results. Please try again.
                    </p>
                </li>
            );
        }
    };

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>{generatePhotos(props)}</ul>
        </div>
    );
}
