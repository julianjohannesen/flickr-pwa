import { buildURL } from "./buildURL.js";

export async function fetchData(query, setLoading, setData, setErrorStatusCode){

    // Build the Flickr API endpoint.
    const url = query && buildURL(query);
    
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
        console.error("Caught in fetch: ", error);
        setErrorStatusCode(error.status);
    }
    // When all is said and done, hide the loading SVG
    finally {
        setLoading(false);
    }

}
