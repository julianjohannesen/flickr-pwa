import React from 'react';
import uuidv4 from 'uuid/v4';
import Photo from './Photo';
import Loading from './Loading';

export default function PhotoContainer({loading, data, query}) {
    // Map over the photos array and call Photo for each photo
    const generatePhotos = (data) => {
        // Check for errors
        if (data?.stat === 'ok') {
            // Store the photos array or else store an array
            const photos = data?.photos?.photo || [];
            // If there are photos, display them
            if (photos.length > 0) {
                return photos.map(photo => (
                    <Photo photo={photo} key={uuidv4()} />
                ));
            // In the case that the query really has no photos associated with it
            } else {
                return (
                    <li className="not-found">
                        <h3>No Results Found</h3>
                        <p>
                            Your search did not return any results. Please try
                            again.
                        </p>
                    </li>
                );
            }
        // If there's been an error on Flickr's end
        } else {
            // Note that the message property only appears in the response when there's been a error, e.g. a malformed parameter.
            return (
                <li className="not-found">
                <h3>There was an error fetching your request.</h3>
                <p>
                    {data.message}
                </p>
            </li>
            )
        }
    };

    query = query ? query.split(' ').map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';

    return (
        <div className="photo-container">
            <h2>Results for {query}</h2>
            <ul>
                { loading ? <Loading /> : generatePhotos(data) }
            </ul>
        </div>
    );
}
