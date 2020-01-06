import React, { Fragment } from 'react';
import Form from '../components/Form';
import Nav from '../components/Nav';
import PhotoContainer from '../components/PhotoContainer'

export default function Home(props) {
    return (
        <Fragment>
            <Form />
            <Nav />
            <PhotoContainer forest={props.forest}/>
        </Fragment>
    )
}
