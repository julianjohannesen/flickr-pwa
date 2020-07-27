import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const history = useHistory();
const location = useLocation();

// This is an example from MDN of how you can use history's listen method to listen for location changes. Whenever a location changes, history.listen will call reportNavigation. 

// Here's reportNavigation. All we're doing is logging out the url and the action (push on to the history stack, pop off the history stack, etc.)
function reportNavigation({ history.action, location }) {
    console.log(`The current URL is ${location.pathname}${location.search}${location.hash}. The last navigation was ${history.action}.`);
}

// Here we wrap our call to history.listen in a function we call unlisten. We can use this later to stop listening for location changes. Aggelos uses this differently in the context of useEffect, but this is similar.
function unlisten(){
    return history.listen(reportNavigation);
} 

// 
unlisten(); 

// I found an interesting example in the mouseFlow library's documentation. They wrap <App /> in a functional component like this:

const Root = () => {
    const history = useHistory()

    useEffect(() => {
        return history.listen((location) => {
            console.log(`You changed the page to: ${location.pathname}`)
        })
    },[history])

    return (
        <App />
    )
}