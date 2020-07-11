import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/styles.css';
import Home from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import Wombats from './pages/Wombats.js';

class App extends Component {
    render() {
        return (
            <div className="App">

                <Router>

                    <Switch>

                        <Route exact path="/">
                            <Home thePath="home" />
                        </Route>

                        <Route exact path="/hedgehogs">
                            <Home thePath="hedgehogs" />
                        </Route>

                        <Route exact path="/sloths">
                            <Home thePath="sloths" />
                        </Route>

                        <Route exact path="/wombats">
                            <Wombats text="wombats" />
                        </Route>


                        <Route exact path="/about">
                            <About />
                        </Route>

                        <Route exact path="/:text" component={Home} />

                        <Route path="*">
                            <NoMatch />
                        </Route>

                    </Switch>

                </Router>
            </div>
        );
    }
}

export default App;
