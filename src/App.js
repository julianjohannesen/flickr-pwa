import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/styles.css';
import Nav from './components/Nav.js';
import Form from './components/Form.js';
import Home from './pages/Home';
import About from './pages/About';
import Cuties from './pages/Cuties.js';
import NoMatch from './pages/NoMatch';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Search for Photos</h1>

                <Router>
                    <Form />
                    <Nav />
                    <Switch>

                        {/* <Route exact path="/">
                            <Home thePath="home" />
                        </Route> */}

                        {/* <Route exact path="/:text" component={Home} /> */}

                        <Route exact path={["/hedgehogs", "/sloths", "/wombats"]}>
                            <Cuties />
                        </Route>

                        <Route exact path="/about">
                            <About />
                        </Route>

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
