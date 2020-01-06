import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './css/styles.css';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import key from './config.js';

import { forest } from './forest.js';

function App() {
    return (
        <div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Home key={key} forest={forest}/>
					</Route>
					
					<Route path="/about">
						<About />
					</Route>

					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</div>
    );
}

export default App;
