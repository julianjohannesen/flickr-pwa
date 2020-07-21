import React, { useState, useEffect } from 'react';
import Form from "./Form.js";
import Search from "./Search";

export default function SearchContainer(){

        // query holds query terms from Form
        const [ query, setQuery ] = useState('');
        // updateFlag tells us when to update the view
        const [ updateFlag, setUpdateFlag ] = useState(false);
    
        // liftUpQuery lifts the query state from the form to here, at which point we pass it down to Search
        function liftUpQuery (query) {
            setQuery(query);
            setUpdateFlag(true); 
        };
    
        // Just some logging
        useEffect(
            ()=>console.log("Query was lifted.", query, updateFlag)
        );

        return (
            <>
            <Form liftUpQuery={liftUpQuery} />
            <Search query={query} setUpdateFlag={setUpdateFlag} />
            </>
        )

}