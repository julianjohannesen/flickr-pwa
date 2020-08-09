import React from 'react';
import { useLocation } from "react-router-dom";
import FormContainer from '../components/FormContainer';
import SearchResults from '../components/SearchResults';

// Custom hook 'useQuery' wraps the query string found in useLocation().search in the browser's URLSearchParams API, providing a bunch of methods. It's overkill here, but means that you could set things up to include all sorts of API settings in the future. Below we get the query with queryParams.get("query")
function useQuery() {
    // Use the browser's URLSearchParams API
    return new URLSearchParams(useLocation().search);
}

export default function Search() {

    const { state } = useLocation();
    const queryParams = useQuery();
    let theQuery = state || queryParams.get("query");
    console.log("In Search, what is theQuery? ", theQuery)

    return (
        <>
            <FormContainer />
            <SearchResults query={theQuery} />
        </>
    );
}
