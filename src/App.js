import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/styles.css';
import Nav from './components/Nav.js';
import Cuties from './pages/Cuties.js';
import About from './pages/About';
import NoMatch from './pages/NoMatch';

export default function App () {

    return (
        // Please note that in two cases I pass an array to the Route's "to" property. This is the equivalent of writing a separate route for each member of the array.
        // Please note that in the search Route I use the Route's render method in order to pass custom props.
        <div className="App">
            <h1>Search for Photos</h1>

            <Router>
                <Nav />
                <Switch>
                    
                    {/* <Route 
                        path="/search" 
                        render={ ()=><Search query={query} setUpdateFlag={setUpdateFlag} /> } 
                    /> */}

                    <Route 
                        exact 
                        path={["/hedgehogs", "/sloths", "/wombats"]}
                    >
                        <Cuties />
                    </Route>

                    <Route 
                        exact 
                        path="/"
                    >
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

// {/* If query has updated, then redirect from the path where the update initiated to the search path */}
// {
//     updateFlag 
//     ?  
//     <Redirect 
//         push 
//         to={{ 
//             pathname:"/search", 
//             search: "?text=" + query,
//             state: {query} 
//             }} 
//         render={ ()=><Search setUpdateFlag={setUpdateFlag} /> }
//     />
//     : 
//     null
//     }

                    
