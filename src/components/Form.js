import React, { Component, createRef } from 'react';

export default class Form extends Component {

    // Hold the local query in state and update it on change to the input
    state = { localQuery: '' }

    // Create a reference to the search input element in the DOM. We'll use this to set focus. NOTE: Because I need to create the ref anyway, I could go ahead and use it to update the input's state.
    searchRef = createRef();

    // The localQuery will update with every change to the input, but only a return or click on the submit button will call the updateQuery function and update the query in Home.
    updateLocalQuery = (e) => this.setState({localQuery: e.target.value});

    // On form submit, build the url and call submitQuery
    localSubmit = (e) => {
        e.preventDefault(); 
        this.props.liftUpQuery(this.state.localQuery);
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
