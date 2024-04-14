import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Pathfinder from "./pathfinderComponents/pathfinder";
import Home from "./homeComponents/home";
import Seive from "./primeComponents/seive";
import Sort from "./sortComponents/sort";
import Queen from "./queenComponents/queen";
import ConvexHull from "./convexHullComponents/convexHull";
import BinarySearch from "./binarySearchComponent/binarySearch";
import RecursiveSort from "./recursiveSortComponents/recursiveSort";
import Puzzle from "./15puzzleComponents/puzzle";
import TuringMachine from "./Turing Machine/turingMachine";
import Graph from "./Graph/graph";
import { divide, join } from 'lodash';

const App = () => {
    useEffect(() => {
        // componentDidMount logic here
        // console.log(window.innerHeight, " ", window.innerWidth);
    }, []); // Empty dependency array means it runs only once after component mount

    // const [name, setName] = useState('');
    // const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');

    // const registerUser = async function (event) {
    //     event.preventDefault();
    //     try {
    //         const response = await fetch('https://localhost:1337/api/register', {
    //             method: 'POST', 
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 name,
    //                 email,
    //                 password,
    //             }),
    //         });
    //         const data = await response.json();

    //         console.log(data);
       
    // };


    return (
        <Router basename='/'>
            <Switch>
                <Route path='/pathfinder' component={Pathfinder} />
                <Route path='/prime' component={Seive} />
                <Route path='/sort' component={Sort} />
                <Route path='/nqueen' component={Queen} />
                <Route path='/convexhull' component={ConvexHull} />
                <Route path='/binarysearch' component={BinarySearch} />
                <Route path='/recursivesort' component={RecursiveSort} />
                {/* <Route path='/turing' component={TuringMachine} /> */}
                {/* <Route path='/15puzzle' component={Puzzle} /> */}
                <Route path='/graph' component={Graph} />
                <Route path='/' component={Home} />
            </Switch>
        </Router>

        // <div>
        //     <h1>Register</h1>
        //     <form onSubmit={registerUser}>
        //         <input
        //             value={name}
        //             onChange={(e) => setName(e.target.value)}
        //             type='text'
        //             placeholder='Name'
        //         /><br />
        //         <input
        //             value={email}
        //             onChange={(e) => setEmail(e.target.value)}
        //             type='email'
        //             placeholder='Email'
        //         /><br />
        //         <input
        //             value={password}
        //             onChange={(e) => setPassword(e.target.value)}
        //             type='password'
        //             placeholder='Password'
        //         /><br />
        //         <input type='submit' value='Register' />
        //     </form>
        // </div>
    );
};

export default App;
