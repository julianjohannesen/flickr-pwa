import React, { useState, useEffect } from "react";
import PhotoContainer from "../src/components/PhotoContainer";
import { buildURL } from "../src/js/buildURL";

export default function Wombats( { text } ){

    // The Flickr URL with the query parameters plugged in
    const url = buildURL(text);

    // Set state for loading and Data
    let [ loading, setLoading ] = useState(true);
    let [ Data, setData ] = useState({});
    let [ errorState, setErrorState ] = useState({})

    // Fetch data
    // Including the empty array as the 2nd argument to useEffect calls useEffect only on mount and not on update. This prevents an infinite fetch loop.
    useEffect( () => {

        // This wrapper function allows us to use async (which always returns a promise) inside useEffect even though hooks can only return a clean up function
        async function wrapperFunction (url) {
            
            try {
                setLoading(true);
                // Fetch the stream and store it in resp
                const resp = await fetch(url);
                // Throw an error if there was a problem with the request
                if (!resp.ok) {
                    throw new Error(`HTTP error! status: ${resp.status}`);
                } else {
                    // Parse the resp stream promise as JSON
                    const parsedResp = await resp.json();
                    // Set Data's state to the parsed stream
                    setData(parsedResp);
                }
            }
            catch (error) {
                console.error(error);
                setErrorState(error);
            }
            finally {
                setLoading(false);
            }
        }
        wrapperFunction(url);
    }, [url] );

return(
        <PhotoContainer 
            loading = {loading}
            data = {Data}
            query = {text}
        />
    );
}
