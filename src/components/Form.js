import React, {Component} from 'react';

export default class Form extends Component {

    //?NOTE: What's the purpose of using a controlled form here?
    //?NOTE: What's the purpose of using a class component here?

    // Hold the local query in state and update it on change to the input
    state = {
        localQuery: '',
        endpoint: 'https://www.flickr.com/services/rest/',
        options: {
            method: 'flickr.photos.search',
            api_key: this.props.apiKey,
            tags: this.state?.localQuery || '',
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

    // The localQuery will update with every change to the input, but only a return or click on the submit button will call the updateQuery function and update the query in Home.
    updateLocalQuery = (e) => this.setState({localQuery: e.target.value});

    // Use the endpoint and options to build the API endpoint URL with parameters
    buildURL = (endpoint, options) => {
        const keys = Object.keys(options);
        const optionsString = keys.reduce( (acc, currentKey) => {
            return acc += currentKey + options.currentKey + "&";
        }, '');
        return endpoint + "?" + optionsString;
    }

    render() {
        return (
            <form 
                className="search-form"
                onSubmit={(e) => this.props.submitQuery(e,this.buildURL(this.state.endpoint, this.state.options))}
            >
                <input 
                    name="search" 
                    onChange={this.updateLocalQuery}
                    placeholder="Search" 
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
