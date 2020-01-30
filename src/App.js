import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './css/styles.css';
import Home from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import { apiKey } from './config.js';


class App extends Component {

    render(){
		return (
			<div className="App">
				<Router>
					<Switch>

						<Route exact path="/">
							<Home apiKey={apiKey} />
						</Route>
						
						<Route path="/about">
							<About />
						</Route>

						<Route path={["/nav/:text", "/search/:text"]} >
							<Home apiKey={apiKey}/>
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
