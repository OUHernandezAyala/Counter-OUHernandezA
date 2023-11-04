//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { Counter } from "./component/counter.jsx";
//render your react application

let tiempo = 0;
setInterval(() => {
    tiempo++;
    ReactDOM.render(<Counter seg={tiempo}/>, document.querySelector("#app"))
}, 1000)

ReactDOM.render( <Counter seg={0}/>, document.querySelector("#app"));
