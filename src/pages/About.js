import React from 'react';
import FormContainer from '../components/FormContainer.js';

export default function About() {
    return (
        <>
            <FormContainer />
            <div style={{ textAlign: 'left', width: '50%', marginLeft: '25%' }}>
            <h1 id="flickr-pwa">Flickr PWA</h1>
            <h2 id="what-is-this-">What is this?</h2>
            <p>
                Flickr PWA is a demonstration application built using React and
                accessing Flickr&#39;s public REST API.{' '}
            </p>
            <p>
                The application performs a text search for images and returns
                matching images along with details about each image. Search
                results display below the search box.
            </p>
            <p>
                The app is deployed on Netlify here:{' '}
                <a href="https://jj-flickr-pwa.netlify.com/">
                    https://jj-flickr-pwa.netlify.com/
                </a>
            </p>
            <h2 id="features-">Features:</h2>
            <ul style={{listStyle:"disc", marginLeft:"1.5em"}}>
                <li>Search Flickr for images</li>
                <li>View search results below the search area</li>
                <li>
                    Routes reflected in address bar, including query parameters
                </li>
                <li>
                    User can type search into address bar with <code>/search?query=whatever</code>
                </li>
                <li>
                    Error handling when a search term returns no results (try
                    &#39;@@@&#39;)
                </li>
                <li>
                    Error handling for invalid routes and server errors (Please note that this
                    will not work on Netlify. Instead, users will be redirected
                    to the homepage.)
                </li>
            </ul>

            <h2 id="local-use">Local Use</h2>
            <p>
                To install the app locally, fork or clone it from GitHub (<a href="https://github.com/TAP-Projects/flickr-pwa" title="Flickr PWA">https://github.com/TAP-Projects/flickr-pwa</a>), and then download it to your local development environment. Be sure to run:
            </p>
            <pre>
                <code>
                    npm <span className="hljs-keyword">install</span>
                </code>
            </pre>
            <p>To install all dependencies. </p>
            <p>To start the local server use:</p>
            <pre>
                <code>
                    <span className="hljs-built_in">npm</span> start
                </code>
            </pre>
            <p>
                <strong>Please note</strong> that you will need to get a Flickr
                API Key. You can do that here: &nbsp;
                <a href="https://www.flickr.com/services/developer/api/">
                    https://www.flickr.com/services/developer/api/
                </a>
            </p>
            <p>
                Once you have an API key, create a file called config.js in the
                &#39;src&#39; directory.
            </p>
            <p>The content will be:</p>
            <pre>
                <code className="lang-js">
                    <span className="hljs-keyword">export</span>
                    <span className="hljs-keyword">const</span> apiKey =
                    <span className="hljs-string">'YOUR API KEY GOES HERE'</span>;
                </code>
            </pre>
            <p>
                <strong>Please note</strong> colorette may through an error. Be
                sure you&#39;re using Node ^14.5.0.
            </p>
            <p>
                <strong>Please note</strong> that the linter may report a warning in useEffect. You can ignore it. The warning shows that the callback has dependencies not listed in the dependency array. That's fine, because we actually don't want to update the component when those other dependencies change.
            </p>

            <h2 id="development-notes">Development Notes</h2>
            <p>
                Flickr PWA was bootstrapped with Create React App and was built using React Hooks. Routing is accomplished with React Router
                5, also using hooks. The app uses the native Fetch API.
            </p>
            <h2 id="issues">Issues</h2>
            <p>
                Please report any issues here:
                <a href="https://github.com/TAP-Projects/flickr-pwa/issues">
                    https://github.com/TAP-Projects/flickr-pwa/issues
                </a>
            </p>
            <p>&nbsp;</p>
        </div>
        </>
    );
}
