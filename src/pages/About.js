import React from 'react'

export default function about() {
    return (
        <div>
            <h1>Flickr Progressive Web Application</h1>

            <section>
                <h2>What is this?</h2>

                <p>
                    Flickr PWA is a demonstration application built using React
                    and accessing Flickr's public REST API.
                </p>
                <p>
                    The application performs a text search for images and
                    returns matching images along with details about each image.
                    Search results display below the search box.
                </p>
            </section>

            <section>
                <h2>Features</h2>
                <ul>
                    <li>
                        Search Flickr for images
                    </li>
                    <li>
                        View search results below the search area
                    </li>
                    <li>
                        Routes reflect search terms (or nav link)
                    </li>
                    <li>
                        Error handling when a search term returns no results
                        (try '@@@')
                    </li>
                    <li>
                        A faux 404 page for invalid routes
                    </li>
                    <li>
                        An About page for information about the project
                    </li>
                    <li>
                        Users can enter a search directly in the URL by
                        appending '?query=whatever'. Use '%20' to separate
                        multiple search terms, e.g.
                        '?query=cute%20animals%20in%20sombreros'.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Local Use</h2>

                <p>
                    To install the app locally, fork or clone it, and then
                    download it to your local development environment. Be sure
                    to run:
                </p>

                <code>
                    npm install
                </code>

                <p>
                    to install all dependencies.
                </p>

                <p>
                    To start the local server use:
                </p>

                <code>
                    npm start
                </code>
            </section>
            <section>
                <h2>Development Notes</h2>

                <p>
                    Flickr PWA was built with Reactjs and was bootstrapped with
                    Create React App. Routing is accomplished with React Router
                    4. The app uses the native Fetch API.
                </p>
            </section>
        </div>
    )
}
