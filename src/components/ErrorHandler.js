import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NoMatch from '../pages/NoMatch';
import ServerError from '../pages/ServerError';

// Please note that this component is a modified version of Aggelos Arvanitakis' approach to universal error handling. In this app, it's overkill, but it was very instructive for me.

// The context here allows components lower down the tree to trigger the display of an error page. This is useful for a bunch of reasons that Aggelos talks about here: https://www.newline.co/@3nvi/centralizing-api-error-handling-in-react-apps--80296494
const ErrorStatusContext = createContext();

// ErrorHandler is the top level component that will wrap our app's core features. Using the render props pattern means that we're supporting non-hook components.
export function ErrorHandler({ children }) {
    const history = useHistory();
    const [errorStatusCode, setErrorStatusCode] = useState();

    // Make sure to reset errorStatusCode whenever the user navigates to a new URL. If we didn't do that, then the user would be "trapped" in an error page loop forever.
    useEffect(() => {
        // history.listen listens for changes to the current location and calls the callback that was passed to it whenever a change is detected. We store the listener, so we can use it later during cleanup.
        const unlisten = history.listen(() => setErrorStatusCode(undefined));
        // We don't want call the unlisten function, we just want to return it so that useEffect can call it during cleanup on unmount. useEffect is allowed to return a clean up callback. When unlisten is called it will reset the errorStatusCode.
        return unlisten;
        // What's the consequence of leaving out the second parameter?
    }, []);

    // This is what ErrorHandler will render. If it has an errorStatusCode that matches an API error, it will only render an error page. If there is no error status, then it will render the children as normal
    function renderContent() {
        if (errorStatusCode >= 400 && errorStatusCode < 500) {
            return <NoMatch />;
        } else if (errorStatusCode >= 500) {
            return <ServerError />
        }

        // The returned children are any child components that appear between our <ErrorHandler> tags.
        return children;
    };

    // We wrap it in a useMemo for performance reasons. More here:
    // https://kentcdodds.com/blog/how-to-optimize-your-context-value/
    const contextPayload = useMemo(
        () => ({ setErrorStatusCode })
        , [setErrorStatusCode]
    );

    // We expose the context's value down to our components, while also making sure to render the proper content to the screen
    return (
        <ErrorStatusContext.Provider value={contextPayload}>
            {renderContent()}
        </ErrorStatusContext.Provider>
    );
};

// useErrorStatus is a custom hook to quickly read the context's value. It's only here to allow quick imports
export function useErrorStatus() {
    return useContext(ErrorStatusContext);
}
