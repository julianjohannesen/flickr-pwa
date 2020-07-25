import React, { useState, useEffect } from 'react';
import PhotoContainer from './PhotoContainer.js';
import { useFetch } from '../js/useFetch.js';

export default function SearchResults({ query }) {

    // Store the loading state
    const [ loading, setLoading ] = useState(false);
    // Store the loading state and any returned data
    const [ Data, setData ] = useState({});
    
    // If there's a query, then call useFetch. Update whenever query changes. 
    //! This is not allowed. You can't call a custom hook as a callback. The reason is that React needs to call hooks in a particular order to keep track of state, and if you use a hook as a callback, you will mess up that order. We have to keep our calls to hooks synchronous and in order.
    useEffect(
        () => query ? useFetch(query, setLoading, setData) : null
        , [query]
    );

    return (
        <PhotoContainer
            loading={loading}
            data={Data}
            query={query}
        />
    );

}
