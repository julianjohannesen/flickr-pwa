import React, { createContext, useContext, useMemo, useState } from 'react';

const initialCache =    {
    "query terms go here": {"photos": {"blah":"blah"}, "stat": "ok"}, 
    "next query":  {"photos": {"blahblah":"blahblah"}, "stat": "ok"}
}

// The context here allows components lower down the tree to access cached data
const DataCacheContext = createContext();

// CacheProvider is the wrapper component that will provide the context. The value is passed in and is then available to any child component via useContext or via a custom hook like the one I provide down below
export function CacheProvider({children}) {

    // Store data with initial value - objects with query phrases for keys. In apps with complicated state, you could use useReducer, but this app is pretty simple, so I stick with useState.
    const [ cache, setCache ] = useState(initialCache);
    
    // For performance improvement, but not relly necessary in a small app like this. Possibly even counter productive, but I want to remember the technique.
    //const memoizedData = useMemo( ()=>({cache, setCache}), [cache, setCache] );

    // We expose the context's value down to our components, while also making sure to render the proper content to the screen
    return (
        <DataCacheContext.Provider value={{cache,setCache}}>
            {children}
        </DataCacheContext.Provider>
    );
};

// useCache is a custom hook to quickly read the context's value. It's only here to allow quick imports
export function useCache() {
    return useContext(DataCacheContext)
}