import React, { useState, useEffect, useCallback } from 'react';

// Usage. Just drop the button with onClick and disabled attributes wherever you need it. In that same component, you destructure execute, pending, value, and error from useAsync(myFunction, immediate)
function App() {

    // Destructure the object returned by useAsync(myFunction, false) to obtain the execute function, pending flag, value object and error object.
    const { execute, pending, value, error } = useAsync(myFunction, false);

    return (
        <div>
            {/* This is cool, because it's shorthand for a conditional. You're saying, if value is truthy, then show <div>{value}</div> */}
            {value && <div>{value}</div>}
            {error && <div>{error}</div>}
            {/* If the async call is pending, then the button will be disabled. Cool! */}
            <button onClick={execute} disabled={pending}>
                {!pending ? 'Click me' : 'Loading...'}
            </button>
        </div>
    );
}

// An async function for testing our hook. Will be successful 50% of the time. In real use, you'd have you're fetch function here.
const myFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rnd = Math.random() * 10;
            rnd <= 5
                ? resolve('Submitted successfully 🙌')
                : reject('Oh no there was an error 😞');
        }, 2000);
    });
};

// The useAsync Hook takes the async function, which is probably some fetch function with error handling, and takes a flag telling it to execute now or later. Down at the very bottom it returns a new object containing the execute function, the pending flag, the value object (our fetched data), and the error object.
const useAsync = (asyncFunction, immediate = true) => {
    const [pending, setPending] = useState(false);
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);

    // The execute function wraps asyncFunction and handles setting state for pending, value, and error. useCallback ensures the below useEffect is not called on every render, but only if and when asyncFunction changes.
    const execute = useCallback(() => {
        setPending(true);
        setValue(null);
        setError(null);
        return asyncFunction()
            .then((response) => setValue(response))
            .catch((error) => setError(error))
            .finally(() => setPending(false));
    }, [asyncFunction]);

    // Call execute if we want to fire it right away.
    // Otherwise execute can be called later, such as
    // in an onClick handler.
    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [execute, immediate]);

    return { execute, pending, value, error };
};
