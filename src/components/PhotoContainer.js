import React from 'react';
import { Consumer } from './Context';
import uuidv4 from 'uuid/v4';
import Photo from './Photo';
import Loading from './Loading';
import NoResults from './NoResults';
import ServerError from './ServerError';

export default function PhotoContainer() {
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
                return (<NoResults />);
            }
        // If there's been an error on Flickr's end
        } else {
            // Note that the message property only appears in the response when there's been a error, e.g. a malformed parameter.
            return (<ServerError message={data.message} />);
        }
    };

    
    return (
        <Consumer>
            { context => { 

                // NOTE: This is a good candidate for a tagged template literal
                let query = context.query ? context.query.split(' ').map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';

                return (
                <div className="photo-container">
                    <h2>Results for {query}</h2>
                    
                    <ul>
                        { context.loading ? <Loading /> : generatePhotos(context.data) }
                    </ul>
                </div>
                );
            }}
        </Consumer>
    );
}
