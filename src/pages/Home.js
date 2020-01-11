import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import Form from '../components/Form';
import Nav from '../components/Nav';
import PhotoContainer from '../components/PhotoContainer';
import { fetchData } from '../js/fetchData.js';

class home extends Component {

    //!NOTE: 3 render cases: '/', '/search/text', '/nav/text' - do i need nav/id? 

    // Store the state of the search query and any returned data
    state = {
        data: ''
    };
    
    // Form will call submitQuery when a user submits a search term using the search form. We're fetching the data here only to make it available to other child components of Home.
    submitQuery = (e, url) => fetchData(url, this.process);
    
    // process will take the parsed response and use it to set state. Again, we're doing this here to make the data available to other child components of Home.
    process = (data) => this.setState({data: data}); 

    render() {
        
        let query = this.props?.match?.params?.text || '';
        if(query) {
            query = query.charAt(0).toUpperCase() + query.slice(1);
        }
        console.log(query);
        return (
            <Fragment>
                <h1>{query || "Search for Photos"}</h1>
                <Form 
                    apiKey={this.props.apiKey}
                    submitQuery={this.submitQuery} 
                />
                <Nav submitQuery={this.submitQuery} />
                <PhotoContainer data={this.state.data} />
            </Fragment>
        );
    }
}

const Home = withRouter(home);
export default Home;
