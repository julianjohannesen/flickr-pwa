import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from "react-router-dom";
import PhotoContainer from './PhotoContainer';
import { buildURL } from '../js/buildURL.js';

export default function Search({ query, setUpdateFlag }) {

    // Store the loading state and any returned data
    const [ loading, setLoading ] = useState(true);
    const [ Data, setData ] = useState({});

    const params = useParams();
    const location = useLocation();
    const history = useHistory();
    // Build the Flickr API URL endpoint with the query plugged in
    const url = buildURL(query);

    useEffect(
        () => {
            // This function is documented in the Cuties component
            async function wrapperFunction(){  
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
                    console.error("Caught in wrapperFunction: ", error);
                    throw new Error("Caught in wrapperFunction: " + error)
                }
                finally {
                    console.log("The data: \n", Data);
                    setLoading(false);
                }
            }
            wrapperFunction(url);

            // Reset the update flag
            setUpdateFlag(false);
            console.log("Search rendered or updated.\n", "The url: \n", url,"\nThe query: \n", query, "\nHow about Params? \n", params, location, history);
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
