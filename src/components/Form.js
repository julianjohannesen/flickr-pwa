import React, { useRef, useState, useEffect } from 'react';

export default function Form ( { liftUpQuery } ) {

    // Store the local query in state and update it on change to the input. We have to set an initial value of an empty string.
    const [ localQuery, setLocalQuery ] = useState('');

    // Create a reference to the search input element in the DOM. We'll use this to set focus.
    const searchRef = useRef(); 
    
    // On change to input, set local query state
    function localChange (e) {
        setLocalQuery(e.target.value);
    }

    // On form submit, lift localQuery to App component. At that point, it's passed down to Search, which will render the results
    function localSubmit (e) {
        e.preventDefault(); 
        // Lift the local query state up to App
        liftUpQuery(localQuery);
        // Reset local query
        setLocalQuery('');
    }

    useEffect(
        // Set focus on the input element
        () => {
            searchRef.current.focus();
            console.log("Form rendered or updated.");
        }
    );

    return (
        <form 
            className="search-form"
            onSubmit={localSubmit}
        >
            <input 
                name="search"
                onChange={localChange}
                placeholder="Search" 
                ref={searchRef}
                required
                type="search" 
                value={localQuery} 
                />
            <button 
                className="search-button"
                type="submit" 
            >
                <svg
                    fill="#fff"
                    height="24"
                    viewBox="0 0 23 23"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
            </button>
        </form>       
    );
}
