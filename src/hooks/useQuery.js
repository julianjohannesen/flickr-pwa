import React from 'react';
import { useErrorStatus } from '../components/ErrorHandler.js';

// This is Anggelos' fetchData function. It's a custom hook the way that he does it.
const useQuery = ({ url }) => {
    const { setErrorStatusCode } = useErrorStatus();
    const [apiData, setApiData] = React.useState();

    // The data is fetched inside useEffect
    // He does the whole thing without async/await, so there's no try...catch stuff.
    React.useEffect(() => {
        fetch(url)
            .then((data) => data.json())
            .then(({ code, status, ...apiData }) => {
                if (code > 400) {
                    setErrorStatusCode(400);
                } else {
                    setApiData(apiData);
                }
            });
    }, [url]);

    // This hook returns the data object. Is that allowed? Can hooks return anything other than a cleanup function? Yes, of course, they can. I'm thinking of the callback that you pass to useEffect! 
    return { data: apiData };
};
