import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './css/styles.css';
import Form from './components/Form.js';
import Nav from './components/Nav.js';
import Search  from './pages/Search';
import Cuties from './pages/Cuties.js';
import About from './pages/About';
import NoMatch from './pages/NoMatch';

export default function App () {

    // query holds query terms from Form
    const [ query, setQuery ] = useState('cute animals in sombreros');
    // a redirect flag to handle searches
    const [ redirect, setRedirect ] = useState(false);

    // liftUpQuery lifts the query state from the form to Search
    function liftUpQuery (query) {
        setQuery(query); 
        setRedirect(true); 
    };

    function resetRedirectFlag (boolVal) {
        setRedirect(boolVal);
    }

    return (
        <div className="App">
            <h1>Search for Photos</h1>

            <Router>
                <Form liftUpQuery={liftUpQuery} />
                <Nav />
                <Switch>

                    {/* Note: this is 3 routes. Paths are passed as an array. Each route renders the same component. This is equivalent to writing 4 separate Routes that render the same component.*/}
                    <Route exact path={["/hedgehogs", "/sloths", "/wombats"]}>
                        { redirect ? <Redirect to="/search" /> : <Cuties /> }
                    </Route>

                    {/* Note: this is 2 routes. Paths are passed as an array. Each route renders the same component. This is equivalent to writing 2 separate Routes that render the same component.*/}
                    <Route exact path={["/", "/about"]}>
                        { redirect ? <Redirect to="/search" /> : <About /> }
                    </Route>

                    {/* Note: We have to use render for this one, because we're passing a custom prop. */}
                    <Route exact path={["/search"]} render={ ()=><Search query={query} resetRedirectFlag={resetRedirectFlag} /> } />

                    <Route path="*">
                        { redirect ? <Redirect to="/search" /> : <NoMatch /> }
                    </Route>

                </Switch>

            </Router>
        </div>
    );
}
