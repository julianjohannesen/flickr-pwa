import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';

// The problem: Using hooks and context, create a component just below App that can be used in any child to set state for a particular variable. At the same time, listen for a particular type of event and set state again, back to its original value. 

let someConditionBasedOnMyState, anotherConditionBasedOnMyState;
const RenderThisComponent = ()=>"Uh huh";
const RenderThatComponent = ()=>"Yup";

const myContext = createContext();

export function myEventHandler({ children }) {

    const history = useHistory();
    const [myState, setMyState] = useState();

    useEffect(() => { // After render, if the location has changed, then reset myState to prevent an infinite loop. myState is what determines what gets rendered in renderContent()
        const unlisten = history.listen(() => setMyState(undefined));
        return unlisten;
    }, [history]);

    function renderContent() { // Preempt rendering everything (children) and just render either This or That
        if (someConditionBasedOnMyState) return <RenderThisComponent />
        else if (anotherConditionBasedOnMyState) return <RenderThatComponent />
        else return children;
    };

    //const contextPayload = useMemo( ()=>({ setMyState }), [setMyState] );

    return ( // All we need to pass is setMyState. When state is set, the change is caught in myContext.Provider and renderContent can use the new state to determine what to render.
        <myContext.Provider value={setMyState}>
            {renderContent()}
        </myContext.Provider>
    );
};

export function useMe() {
    return useContext(myContext);
}