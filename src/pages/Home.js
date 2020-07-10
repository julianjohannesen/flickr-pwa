import React, { Component, Fragment } from 'react';
//import { withRouter } from 'react-router';
import Form from '../components/Form';
import Nav from '../components/Nav';
import PhotoContainer from '../components/PhotoContainer';
import { buildURL } from '../js/buildURL.js';
import { fetchData } from '../js/fetchData.js';
import { apiKey } from '../config.js';

class Home extends Component {
    // Store the state of the search query and any returned data
    state = {
        loading: false,
        data: '',
        url: '',
        endpoint: 'https://www.flickr.com/services/rest/',
        options: {
            method: 'flickr.photos.search',
            api_key: apiKey,
            text: 'sombreros',
            extras:
                'description%2C+license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o',
            per_page: '24',
            format: 'json',
            nojsoncallback: '1'
        },
        hedgehogs: [],
        sloths: [],
        wombats: []
    };

    // liftUpQuery will handle the form submission, lifting Form's localQuery to Home's this.state.options.text, and then in the callback, calling buildURL to build the url
    liftUpQuery = query => {

        // There are three ways that the search terms can be altered: a search, a route, or typing in a url
        let theQuery;
        // If the query came from a search, it's ready to be used
        if (query) {
            theQuery = query;
        // If the query came from a route with url parameters, we get it from match
        } else if (this.props.match.params.text) {
            theQuery = this.props.match.params.text;
            console.log("The query from match.params.text: ", theQuery)
        // If the query came from the url, we need to get it from location. 
        } else if (this.props.location.search) { 
            theQuery = this.props.location.search.slice(7);
            console.log("The query from location.search: ", theQuery)
        }

        this.setState(
            // After loading the page, update this.state.options.text with the default query
            (state, props) => {
                return {
                    options: {
                        ...state.options,
                        text: theQuery ? theQuery : "cute animals in sombreros"
                    }
                };
            },
            // And then in the callback, call submitQuery
            () => this.submitQuery()
        );
        
    };

    // liftUpData will lift the fetched data from fetchData to Home. We pass it to fetchData when we call fetchData in componentDidUpdate. This additional step is necessary, because fetchData is defined in another file/scope. We need to get the fetched data from there to here.
    liftUpData = data => this.setState({ 
        loading: false,
        data: data 
    });

    // Now that the query text has been lifted up, we can build the url and fetch the data
    submitQuery = () => {
        this.setState(
            // First, build the url
            {   
                loading: true,
                url: buildURL(this.state.endpoint, this.state.options)
            },
            // Then, in the callback, use the url to fetchData
            () => {
                if (this.state.url) {
                    fetchData(this.state.url, this.liftUpData);
                }
            }
        );

        // Rewrite the current url to append the search terms
        this.props.history.push(`${this.state.options.text}`)
    };

    // When the component updates with a new url state, then fetchData
    componentDidMount() {

        // Call liftUpQuery after Home mounts in case the user has entered a search directly into the url field
        this.liftUpQuery('');

    }

    render() {
        return (
            <Fragment>
                <h1>Search for Photos</h1>
                <Form liftUpQuery={this.liftUpQuery} />
                <Nav />
                {this.state.data ? (
                    <PhotoContainer
                        loading={this.state.loading}
                        data={this.state.data}
                        query={this.state.options.text}
                    />
                ) : null}
            </Fragment>
        );
    }
}

// Use withRouter to pass match,location, and history props to home. In a functional component you could just use the hook useParams(). Or you could just use component() or render() in the Route
//const Home = withRouter(home);
export default Home;
