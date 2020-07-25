import React from "react";
import { buildURL } from "./buildURL.js";
import { useErrorStatus } from "../components/ErrorHandler.js";

// I'm trying to make this a custom hook, but I'm not really sure what I'm doing. This used to be a wrapper function around fetch that contained the try... catch and other logic needed for fetch(url).

// One thing that's confusing is the difference between a function component and a custom hook. Function components render the UI by returning a React element. They can use hooks. Custom hooks don't return a react element, or do they? Custom hooks can also use other hooks in their body. So, where's the line between a custom hook and a functional component?


export async function useFetch(query, setLoading, setData){

    // Use the custom useErrorStatus hook to get the error status setter from the ErrorHandler component
    const { setErrorStatusCode } = useErrorStatus();

    // Build the Flickr API endpoint.
    const url = query ? buildURL(query) : null;
    
    try {
        // Show the loading SVG
        setLoading(true);
        // Await fetching the response stream
        const resp = await fetch(url);
        // If fetch fails, set the errorStatusCode in ErrorHandler
        if (!resp.ok) {
            console.error(`HTTP error during fetch! status: ${resp.status}`);
            setErrorStatusCode(resp.status);
        // If fetch succeeds, await the parsing of the stream and then setData. Data lives in the parent component SearchResults.
        } else {
            const parsedResp = await resp.json();
            setData(parsedResp);
        }
    }
    // Catch any other errors
    catch (error) {
        console.error("Caught in useFetch: ", error);
        setErrorStatusCode(error.status);
    }
    // When all is said and done, hide the loading SVG
    finally {
        setLoading(false);
    }

    // If this is a custom hook, then I can use useEffect to call fetch when the query changes
    useEffect(
        ()=>true
    );
    // If this is a custom hook, then I can return the data here
    return {}

}
