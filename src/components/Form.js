import React, { Component, createRef } from 'react';

export default class Form extends Component {

    // Hold the local query in state and update it on change to the input
    state = {
        localQuery: '',
        endpoint: 'https://www.flickr.com/services/rest/',
        options: {
            method: 'flickr.photos.search',
            api_key: this.props.apiKey,
            tags:  '',
            privacy_filter: '1',
            safe_search: '1',
            content_type: '1',
            media: 'photos',
            is_commons: 'true',
            extras:
                'description%2C+license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o',
            per_page: '24',
            format: 'json',
            nojsoncallback: '1'
        }
    }

    // Create a reference to the search input element in the DOM. We'll use this to set focus.
    searchRef = createRef();

    // The localQuery will update with every change to the input, but only a return or click on the submit button will call the updateQuery function and update the query in Home.
    updateLocalQuery = (e) => this.setState({localQuery: e.target.value});

    // Use the endpoint and options to build the API endpoint URL with parameters
    buildURL = () => {
        const keys = Object.keys(this.state.options);
        // Reduce the keys object, adding each 'key=value&' parameter as we go, and returning the complete string
        const optionsString = keys.reduce( (acc, currentKey) => {
            return acc += currentKey + "=" + this.state.options[currentKey] + "&";
        }, '');
        console.log("At the time I return the url, the tags are: ", this.state.options.tags, " and the localQuery is: ", this.state.localQuery)
        // Return the full url string
        return this.state.endpoint + "?" + optionsString;
    }

    // On form submit, build the url and call submitQuery
    localSubmit = (e) => {
        this.setState(
            // Update the options object with the most recent localQuery value
            { 
                options: {
                    ...this.state.options, 
                    tags: this.state.localQuery.trim().split(' ').join(',')
                } 
            }, 
            // Then, using the updated options, use the callback to build the url
            ()=>{
                // Build the url string
                const url = this.buildURL();
                // Call submit and pass in the event and url string
                this.props.submitQuery(e, url);
            }
        );
    }

    componentDidMount(){
        // Set focus on the input element
        this.searchRef.current.focus();
    }

    render() {
        return (
            <form 
                className="search-form"
                onSubmit={this.localSubmit}
            >
                <input 
                    name="search"
                    onChange={this.updateLocalQuery}
                    placeholder="Search" 
                    ref={this.searchRef}
                    required
                    type="search" 
                    value={this.state.localQuery} 
                    />
                <button 
                    className="search-button"
                    type="submit" 
                >
                    <svg
                        fill="#fff"
                        height="24"
                        viewBox="0 0 23 23"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                </button>
            </form>
        );
    }
}
