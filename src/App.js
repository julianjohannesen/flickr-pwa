import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/styles.css';
import { ErrorHandler } from './components/ErrorHandler.js';
import Nav from './components/Nav.js';
import Search from './pages/Search.js';
import Cuties from './pages/Cuties.js';
import About from './pages/About.js';
import NoMatch from './pages/NoMatch.js';
import { ProvideCache } from './components/DataCache';

export default function App() {
    return (
        <div className="App">
            <Router>
                {/*note that ErrorHandler must be inside Router, because it uses React Router's History object */}
                <ErrorHandler>
                    <ProvideCache>
                        <h1>Search for Photos</h1>
                        <Nav />
                        <Switch>
                            <Route exact path="/search">
                                <Search />
                            </Route>

                            <Route
                                exact
                                path={['/hedgehogs', '/sloths', '/wombats']}
                            >
                                <Cuties />
                            </Route>

                            <Route exact path="/">
                                <About />
                            </Route>

                            <Route path="*">
                                <NoMatch />
                            </Route>
                        </Switch>
                    </ProvideCache>
                </ErrorHandler>
            </Router>
        </div>
    );
}
