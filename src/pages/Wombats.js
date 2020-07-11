import React, { useState, useEffect } from "react";
import { apiKey } from "../config";
import PhotoContainer from "../components/PhotoContainer";

export default function Wombats(){

    // The flickr API search endpoint and query parameters
    const wombatUrl = `
        https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=wombats&extras=description%2C+license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&per_page=24&format=json&nojsoncallback=1&
        `;

    // Set state for loading and wombatData
    let [ loading, setLoading ] = useState(true);
    let [ wombatData, setWombatData ] = useState({});
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
                console.log(resp);
                // Throw an error if there was a problem with the request
                if (!resp.ok) {
                    throw new Error(`HTTP error! status: ${resp.status}`);
                } else {
                    // Parse the resp stream promise as JSON
                    const parsedResp = await resp.json();
                    console.log(parsedResp);
                    // Set wombatData's state to the parsed stream
                    setWombatData(parsedResp);
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
        wrapperFunction(wombatUrl);
    }, [] );

return(
        <PhotoContainer 
            loading = {loading}
            data = {wombatData}
            query = "wombats"
        />
    );
}
