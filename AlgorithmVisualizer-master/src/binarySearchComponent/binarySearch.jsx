// import React, {Component} from 'react';
// import EntryPoint from "./entryPoint";
// import Search from "./search";
// import Navbar from "./navbar";

// class BinarySearch extends Component {
//     state={
//         upper:100,
//         lower:0,
//         max:100,
//         isRunning:false
//     }
//     render() {
//         return (
//             <div>
//                 <Navbar/>
//                 <br />
//                 <br />
//                 <br />
//             <center>
//                 {!this.state.isRunning &&
//                 <EntryPoint
//                     startGame={this.handleStartGame}
//                     upper={this.state.upper}
//                     setUpper={this.handleSetUpper}
//                 /> }
//                 {this.state.isRunning &&
//                 <Search
//                     yesButton={this.handleYes}
//                     noButton={this.handleNo}
//                     upper={this.state.upper}
//                     lower={this.state.lower}
//                     max={this.state.max}
//                     onRestart={this.handleRestart}
//                 />
//                 }
//             </center>
//             </div>
//         );
//     }
//     handleStartGame = () =>{
//         this.setState({isRunning:true});
//     }
//     handleRestart = () =>{
//         this.setState({isRunning:false,upper:100,lower:0});
//     }
//     handleYes = () =>{
//         const mid = Math.floor( (this.state.upper+this.state.lower)/2);
//         this.setState({lower:mid+1});
//     }
//     handleNo = () =>{
//         const mid = Math.floor( (this.state.upper+this.state.lower)/2);
//         this.setState({upper:mid});
//     }
//     handleSetUpper = (up) =>{
//         let val = parseInt(up);
//         if( val<=0 ){
//             val = 100;
//         }
//         this.setState({upper:val,max:val});
//     }
// }

// export default BinarySearch;


import React, { useState } from 'react';
import EntryPoint from "./entryPoint";
import Search from "./search";
import Navbar from "./navbar";

const BinarySearch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [upper, setUpper] = useState(100);
    const [lower, setLower] = useState(0);
    const [max, setMax] = useState(100);

    const handleStartGame = () => {
        setIsRunning(true);
    };

    const handleRestart = () => {
        setIsRunning(false);
        setUpper(100);
        setLower(0);
    };

    const handleYes = () => {
        const mid = Math.floor((upper + lower) / 2);
        setLower(mid + 1);
    };

    const handleNo = () => {
        const mid = Math.floor((upper + lower) / 2);
        setUpper(mid);
    };

    const handleSetUpper = (up) => {
        let val = parseInt(up);
        if (val <= 0) {
            val = 100;
        }
        setUpper(val);
        setMax(val);
    };

    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <center>
                {!isRunning &&
                    <EntryPoint
                        startGame={handleStartGame}
                        upper={upper}
                        setUpper={handleSetUpper}
                    />}
                {isRunning &&
                    <Search
                        yesButton={handleYes}
                        noButton={handleNo}
                        upper={upper}
                        lower={lower}
                        max={max}
                        onRestart={handleRestart}
                    />}
            </center>
        </div>
    );
};

export default BinarySearch;
