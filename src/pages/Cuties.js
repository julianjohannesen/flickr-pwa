import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { buildURL } from '../js/buildURL';
import { useErrorStatus } from '../components/ErrorHandler.js';
import { useCache } from '../components/DataCache.js';
import FormContainer from '../components/FormContainer';
import PhotoContainer from '../components/PhotoContainer2';

export default function Cuties() {

    // The functionality of this component is documented in the SearchResults component
    
    // The query is taken from the path name for the cute animals pages (hedgehogs, etc.)
    let path = useLocation().pathname;
    let query = "Keep it empty for now";
    
    // Local state
    const [ loading, setLoading ] = useState(false);

    // Imported
    const { cache, setCache } = useCache();
    const { setErrorStatusCode } = useErrorStatus();

    function formatPageHeading(queryTerms) {
        return queryTerms
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    useEffect(() => {
        async function fetchIt() {
            query = path.substr(1);
            console.log("here's the cache: ", cache, "\nand here's the loading status: ", loading);
            if (typeof cache[query] !== 'undefined') return;
            try {
                await setLoading(true);
                const resp = await fetch(buildURL(query));
                if (!resp.ok) {
                    console.error(
                        `HTTP error during fetch. Status: ${resp.status}`
                    );
                    setErrorStatusCode(resp.status);
                } else {
                    const parsedResp = await resp.json();
                    await setCache( prevCache => ({
                        ...prevCache,
                        ...{
                            [query]: {
                                pageHeading: formatPageHeading(query), 
                                data: parsedResp
                            }
                        },
                    }));
                }
            } catch (error) {
                console.error('Caught in fetch: ', error);
                setErrorStatusCode(error.status);
            } finally {
                await setLoading(false);
            }
        }
        fetchIt();
    }, [query]);

    if(cache[query] !== "undefined"){
        return (
            <>
                <FormContainer/>
                <PhotoContainer loading={loading} query={query} />
            </>
        )
    } 
}
