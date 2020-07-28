import React, { useState, useEffect } from 'react';
import PhotoContainer from './PhotoContainer.js';
import { fetchData } from '../js/fetchData.js';
import { useErrorStatus } from "../components/ErrorHandler.js";

export default function SearchResults({ query }) {

    // Store the loading state
    const [ loading, setLoading ] = useState(false);
    // Store the loading state and any returned data
    const [ Data, setData ] = useState({});
    // Use the custom useErrorStatus hook to get the error status setter from the ErrorHandler component
    const { setErrorStatusCode } = useErrorStatus();

    // If there's a query, then call fetchData. Update whenever query changes. 
    useEffect(
        () => {
            fetchData(query, setLoading, setData, setErrorStatusCode);
            // Return the clean up function which resets the loading flag
            return ()=>{console.log("No cleanup")}
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
