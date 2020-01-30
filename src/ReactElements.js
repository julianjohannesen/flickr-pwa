import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement(
    "h1",
    {"title": "This h1 was created by React"},
    "This h1 tag was created by React"
);

// Create a small functional component for our title. This isn't necessary. We could just put 'title' down in ReactDOM.render()
export function CreateTitle(){
    console.log(title);
    return title;
}

// It looks a bit like this when you log it in dev tools, although I had to make it look like an object here to get the syntax highlighting:
const react.element = "Just to make this work"
const ignoreThis = {
    //Object
    $$typeof: Symbol(react.element),
    type: "h1",
    key: null,
    ref: null,
    props: {
        title: "This h1 was created by React",
        children: "This h1 tag was created by React",
        __proto__: Object,
        _owner: null
    },
    _store: {
        validated: false,
        __proto__: Object
    },
    _self: null,
    _source: null,
    __proto__: Object
}

// ReactDOM will render out React elements (or components). This is the only place that React touches the real DOM. 
ReactDOM.render(
    <CreateTitle />,
    // ReactDOM will go look in the public/index.html file for this div
    document.getElementById("MyTest")
)

// JSX is an extension that allows us to write hmtl-like syntax which Babel will then transpile to a series of React.createElement calls.