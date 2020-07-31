import React, { useState, useEffect } from "react";
import { useErrorStatus } from "./ErrorHandler.js";
import { useCache } from "./DataCache.js"
import { buildURL } from "../js/buildURL.js";
import { isEmpty } from "lodash";
import PhotoContainer from "./PhotoContainer.js";

export default function SearchResults({query}){

    const [ loading, setLoading ] = useState(false);
    // Set the error status, if applicable
    const [ pageHeading, setPageHeading ] = useState('Nothing ;)')
    const { setErrorStatusCode } = useErrorStatus();
    const { data, setData } = useCache();

    // Capitalize the first letter of each query term
    function formatPageHeading(queryTerms){ 
        return queryTerms.split(' ').map( word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');  
    }
    
    useEffect( 
        // Callback wrapper. useEffect will not allow a function inside it to return a promise, so we define a function here that itself defines our fetch function and then immediately calls it.  The wrapper's only dependency is "query".
        () => {
            // Async wrapper. We need an async wrapper to allow use to await our fetch results. Some people create a separate "handleAsync", but it's not really necessary here.
            async function fetchIt() {
                console.log(data);
                // Exit if the data is already cached
                if(!isEmpty(data[query])) return;
                try {
                    // Show the loading SVG
                    setLoading(true);
                    // Await fetching the response stream
                    const resp = await fetch(buildURL(query));
                    // If fetch fails, set the errorStatusCode in ErrorHandler
                    if (!resp.ok) {
                        console.error(`HTTP error during fetch. Status: ${resp.status}`);
                        setErrorStatusCode(resp.status);
                    // If fetch succeeds, await the parsing of the stream and then setData. 
                    } else {
                        setPageHeading(formatPageHeading(query));
                        const parsedResp = await resp.json();
                        setData({[query]: parsedResp});
                    }
                }
                // Catch any other errors
                catch (error) {
                    console.error("Caught in fetch: ", error);
                    setErrorStatusCode(error.status);
                }
                // When all is said and done, hide the loading SVG
                finally {
                    setLoading(false);
                }
            }
            fetchIt();
        }
        // The only dependency of our useEffect callback. Whenever query changes, useEffect will update the UI.
        ,[query]
    )

    return (
        <PhotoContainer
            data={data[query]}
            loading={loading}
            pageHeading={pageHeading}
        />
    )

}
