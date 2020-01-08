import React, { Component, Fragment } from 'react';
//import { useParams } from 'react-router-dom';
import Form from '../components/Form';
import Nav from '../components/Nav';
import PhotoContainer from '../components/PhotoContainer';
import { fetchData } from '../js/fetchData.js';

export default class Home extends Component {
    // Store the state of the search query and any returned data
    state = {
        data: ''
    };

    // The search form component will call submitQuery when a user submits a search term using the search form
    submitQuery = (e, url) => {
        console.log("submitQuery just got called. The url argument is: ", url);
        
        // Fetch the data using the query parameter
        fetchData(url, this.process);
    };

    process = (data) => this.setState({data: data});

    // componentDidUpdate(){
    //     let { tag } = useParams();
    //     if(tag) {
    //         fetchData(tag);
    //     } else {
    //         fetchData(this.state.query);
    //     }
    // }

    render() {
        console.log("The response data after processing and setting state: ", this.state.data)
        return (
            <Fragment>
                <Form submitQuery={this.submitQuery} apiKey={this.props.apiKey} />
                <Nav submitQuery={this.submitQuery} />
                <PhotoContainer data={this.state.data} />
            </Fragment>
        );
    }
}
