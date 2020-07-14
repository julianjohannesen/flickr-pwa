import React from 'react'

export default function about() {
    return (
        <div style={{textAlign:"left", paddingLeft: "2em"}}>
            <h1>Flickr Progressive Web Application</h1>

            <section>
                <h2>What is this?</h2>

                <p>
                    Flickr PWA is a demonstration application built with React.
                </p>
                <p>
                    The application performs a text search for images using Flickr's REST API and returns matching images along with details about each image. Search results display below the search box.
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
                        When results are shown, routes reflect the search terms used
                    </li>
                    <li>
                        Error handling when a search term returns no results
                        (try '@@@')
                    </li>
                    <li>
                        A faux 404 page for invalid routes
                    </li>
                    <li>
                        Users can enter a search directly in the URL by appending '?query=whatever'. Use '%20' to separate multiple search terms, e.g.
                        '?query=cute%20animals%20in%20sombreros'.
                    </li>
                </ul>
            </section>

            
            <section>
                <h2>Development Notes</h2>

                <p>
                    Flickr PWA was built with React.js using hooks and was bootstrapped with Create React App. Routing is accomplished with React Router
                    5, also using hooks. The app uses the native Fetch API.
                </p>
            </section>
        </div>
    )
}
