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
        query: '',
        data: ''
    };
    
    // Form will call submitQuery when a user submits a search term using the search form. We're fetching the data here only to make it available to other child components of Home.
    submitQuery = (e, url, query) => fetchData(url, query, this.process);
    
    // process will take the parsed response and use it to set state. Again, we're doing this here to make the data available to other child components of Home.
    process = (query, data) => this.setState({
        query: query, 
        data: data
    });

    // Set the url to match the search query
    componentDidMount(){
        this.props.history.push(`/${this.state.query}`);
    }

    render() {

        console.log("The match, history, location stuff: ", this.props.match, this.props.history, this.props.location)
        
        return (
            <Fragment>
                <h1>Search for Photos</h1>
                <Form 
                    apiKey={this.props.apiKey}
                    submitQuery={this.submitQuery} 
                />
                <Nav submitQuery={this.submitQuery} />
                {this.state.data ? <PhotoContainer data={this.state.data} query={this.state.query} /> : null}
            </Fragment>
        );
    }
}

// Use withRouter to pass match,location, and history props to home. In a functional component you could just use the hook useParams()
const Home = withRouter(home);
export default Home;
