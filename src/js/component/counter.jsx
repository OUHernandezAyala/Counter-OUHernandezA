import React from "react";

export const Counter = (props) =>{
    return(
        <main className="text-center bg-black d-flex justify-content-center">
            <div className="text-white digitos"><i className="far fa-clock"></i></div>
            <div className="text-white digitos">{Math.floor(props.seg/100000) %10}</div>
            <div className="text-white digitos">{Math.floor(props.seg/10000) %10}</div>
            <div className="text-white digitos">{Math.floor(props.seg/1000) %10}</div>
            <div className="text-white digitos">{Math.floor(props.seg/100) %10}</div>
            <div className="text-white digitos">{Math.floor(props.seg/10) %10}</div>
            <div className="text-white digitos">{Math.floor(props.seg) %10}</div>
        </main>
    )
};