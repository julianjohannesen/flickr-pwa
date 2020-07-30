import React from 'react';
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer.js"

export default function ServerError() {
    return (
        <div>
            <FormContainer />
            <h2>The server encountered an error.</h2>
            <h3>
                Sorry. Either our servers or Flickr's servers have encountered a problem. Please try again later.
            </h3>
            <p>Return <Link to="/">Home</Link>.</p>
        </div>
    );
}
