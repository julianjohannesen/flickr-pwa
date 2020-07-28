import React from 'react';
import { useLocation } from "react-router-dom";
import FormContainer from '../components/FormContainer';
import SearchResults from '../components/SearchResults';

// Custom hook 'useQuery' wraps the query string found in useLocation().search in the browser's URLSearchParams API, providing a bunch of methods. Below we get the query with queryParams.get("query")
function useQuery() {
    // Use the browser's URLSearchParams API
    return new URLSearchParams(useLocation().search);
}

export default function Search() {

    const queryParams = useQuery();

    return (
        <>
            <FormContainer />
            <SearchResults query={queryParams.get("query")} />
        </>
    );
}
