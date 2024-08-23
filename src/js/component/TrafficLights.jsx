import React from "react";

export const TrafficLight = () => {

    return (
        <div className="container my-5">
            <div className="container bg-dark p-3 rounded">
                <div className={ "light" }> </div>
                <div className={ "light" }> </div>
                <div className={ "light" }> </div>
            </div>
        </div>
    );
};