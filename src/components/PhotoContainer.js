import React from 'react';
import uuidv4 from 'uuid/v4'
import Photo from './Photo';

export default function PhotoContainer(props) {
    console.log(arguments, props);

    const photos = props.forest.photos.photo

    const generatePhotos = photoArr => {
        return photoArr.map(photo => {
            return (<Photo photo={photo} key={uuidv4()}/>);
        });
    };

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>{generatePhotos(photos)}</ul>
        </div>
    );
}
