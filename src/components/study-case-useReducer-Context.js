// cacheContext.js
import React, {createContext, useContext, useReducer} from 'react';

const initialState = {
    "purple ponies": "Purple ponies are good dancers.",
    "mushrooms": "Mushrooms are great on pizza."
}
const cacheContext = createContext(initialState);
const { Provider } = cacheContext;

export function CacheProvider( { children } ) {

    function reducer (state, action) {
        switch(action.type) {
            case 'ADD_TO_CACHE':
                // How can I get previous state?
                return {...cache, state};
            default:
                return "error"
        }
    }

    const [cache, dispatch] = useReducer(reducer, initialState);

    return <Provider value={{ cache, dispatch }}>{children}</Provider>;
};

export function useCache() {
    return useContext(cacheContext);
}

// exampleComponent.js

export function ExampleComponent () {
    const { cache, dispatch } = useCache();
    const wrapper = ()=>dispatch( 
            {'ADD_TO_CACHE': {"dragons": "Dragons are awesome."}}
    );
    
    return (
        <>
        {/* <ul>
            {Object.keys(cache).map(key => (
                <li>{cache[key]}</li>
            ))}
        </ul> */
        console.log(cache)}
        
        <button onClick={wrapper}>Add Dragons to cache.</button>
        </>
    )
};