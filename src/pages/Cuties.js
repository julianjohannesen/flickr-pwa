import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PhotoContainer from "../components/PhotoContainer";
import { buildURL } from "../js/buildURL";
// import FormContainer from "../components/FormContainer";

export default function Cuties () {

    const path = useLocation().pathname;
    const cuteAnimal = path.substr(1);

    // The Flickr URL with the query parameters plugged in
    const url = buildURL(cuteAnimal);

    // Set state for loading and Data
    let [ loading, setLoading ] = useState(true);
    let [ Data, setData ] = useState({
        hedgehogs: {},
        sloths: {},
        wombats: {}
    });

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
                    console.error(`HTTP error! status: ${resp.status}`);
                    throw new Error(`HTTP error! status: ${resp.status}`);
                } else {
                    // Parse the resp stream promise as JSON
                    const parsedResp = await resp.json();
                    // Set Data's state to the parsed stream
                    setData({ ...Data, [cuteAnimal]:parsedResp });
                }
            }
            catch (error) {
                console.error("Caught in wrapperFunction: ", error);
                throw new Error("Caught in wrapperFunction: " + error)
            }
            finally {
                console.log(Data);
                setLoading(false);
            }
        }
        const animalData = Object.keys(Data[cuteAnimal]) ?? []
        // Only call the effect if the data isn't already present
        if (animalData.length === 0) {
            wrapperFunction(url);
        }
    }, [url] );
    
    return(
        <>
            {/* <FormContainer /> */}
            <PhotoContainer 
                loading = {loading}
                data = {Data[cuteAnimal]}
                query = {cuteAnimal}
            />
        </>
        );
}
