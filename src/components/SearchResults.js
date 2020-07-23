import React, { useState, useEffect } from 'react';
import PhotoContainer from './PhotoContainer';
import { buildURL } from '../js/buildURL.js';

export default function SearchResults({ query, setUpdateFlag }) {

    // Store the loading state and any returned data
    const [ loading, setLoading ] = useState(false);
    const [ Data, setData ] = useState({});

    // Build the Flickr API URL endpoint with the query plugged in, provided that there is a query. Otherwise set it to an empty string.
    const url = query ? buildURL(query) : null;

    useEffect(
        () => {
            // This function is documented in the Cuties component
            async function fetchData(){  
                try {
                    setLoading(true);
                    const resp = await fetch(url);
                    if (!resp.ok) {
                        console.error(`HTTP error! status: ${resp.status}`)
                        throw new Error(`HTTP error! status: ${resp.status}`);
                    } else {
                        const parsedResp = await resp.json();
                        setData(parsedResp);
                    }
                }
                catch (error) {
                    console.error("Caught in fetchData: ", error);
                    throw new Error("Caught in fetchData: " + error)
                }
                finally {
                    console.log("The data: \n", Data);
                    setLoading(false);
                }
            }
            
            // If there's a query and the URL has been built, then fetch the data
            if (query && url) {
                fetchData(url);
            }
        }
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
