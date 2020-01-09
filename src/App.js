import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './css/styles.css';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { apiKey } from './config.js';

//import { forest } from './forest.js';

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
						
						<Route path="/most-faved">
							<About />
						</Route>
						
						<Route path="/most-viewed">
							<About />
						</Route>
						<Route path="/most-ratioed">
							<About />
						</Route>

						<Route path="/search/:tag" children={<Home apiKey={apiKey} />} />

						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
