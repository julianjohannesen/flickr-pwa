import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/styles.css';
import Home from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/NoMatch';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        {/*<Route exact path="/" component={Home} /> */}

                        <Route
                            exact
                            path={['/', '/?query=:text']}
                            component={Home}
                            />

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
