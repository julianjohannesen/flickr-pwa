import React, { createContext, useContext, useMemo, useState } from 'react';

// The context here allows components lower down the tree to access cached data
const DataCacheContext = createContext();

export function ProvideCache({children}) {

    // Store data with initial value - objects with query phrases for keys
    const [ data, setData ] = useState(
        {
            "query terms go here": "data object goes here", 
            "next query": "next object, etc."
        }
    );
    
    // For performance improvement
    const memoizedData = useMemo( ()=>({data, setData}), [data, setData] );

    // We expose the context's value down to our components, while also making sure to render the proper content to the screen
    return (
        <DataCacheContext.Provider value={memoizedData}>
            {children}
        </DataCacheContext.Provider>
    );
};

// useCache is a custom hook to quickly read the context's value. It's only here to allow quick imports
export function useCache() {
    return useContext(DataCacheContext)
}