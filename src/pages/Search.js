import React, { useState, useEffect } from 'react';
import PhotoContainer from '../components/PhotoContainer';
import { buildURL } from '../js/buildURL.js';

export default function Search({ query, resetRedirectFlag }) {

    // In case this was a redirect from the cute animals pages, reset the redirect flag
    resetRedirectFlag(false);

    // Store the state of the search query and any returned data
    const [ loading, setLoading ] = useState(true);
    const [ Data, setData ] = useState({});

    const url = buildURL(query);

    useEffect(
        () => {
            async function wrapperFunction(){  
                try {
                    setLoading(true);
                    const resp = await fetch(url);
                    if (!resp.ok) {
                        throw new Error(`HTTP error! status: ${resp.status}`);
                    } else {
                        const parsedResp = await resp.json();
                        setData(parsedResp);
                    }
                }
                catch (error) {
                    console.error(error);
                }
                finally {
                    console.log(Data);
                    setLoading(false);
                }
            }
            wrapperFunction(url);
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

// how do you get the query terms from the form component?
    // If Search doesn't render the Form, how can it pass down the function needed to set the query in state?
// how do you use those terms to build the flickr api url?
// how do you fetch the data and do it only when the query state changes?
// how do you store the data in state?
// how do you display the photos?