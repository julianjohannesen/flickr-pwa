import React from 'react'

export default function about() {
    return (
        <div style={{textAlign:"left", paddingLeft: "2em"}}>
            <h1>Flickr Progressive Web Application</h1>

            <section>
                <h2>What is this?</h2>

                <p>
                    Flickr Progressive Web Application is a demonstration application that uses Flickr's REST API to search for and display photos. 
                </p>
                <p>
                    The application is
                </p>
            </section>

            <section>
                <h2>Features</h2>
                <ul style={{listStyle:"disc inside"}}>
                    <li>
                        Search Flickr for images
                    </li>
                    <li>
                        View a gallery of search results below the search area
                    </li>
                    <li>
                        Routes are reflected in address bar
                    </li>
                    <li>
                        Error handling when a search term returns no results
                        (try '@@@')
                    </li>
                    <li>
                        Error handling for invalid routes
                    </li>
                </ul>
            </section>

            
            <section>
                <h2>Development Notes</h2>

                <p>
                    Flickr PWA was built with React.js using hooks and was bootstrapped with Create React App. Routing is accomplished with React Router 5, also using hooks. The app uses the native Fetch API.
                </p>
            </section>
        </div>
    )
}
