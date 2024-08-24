import React, { useState } from "react";

export const TrafficLight = () => {
    const [color, setColor] = useState("red");

    return (
        <div className="container my-5">
            <div className="container bg-dark p-3 rounded">
                <div className={ "light red " + (color == "red" ? "ligthOn" : "")}
                        onClick={() => setColor("red")}>
                </div>

                <div
                    className={ "light yellow " + (color == "yellow" ? "ligthOn" : "")}
                    onClick={() => setColor("yellow")}>
                </div>

                <div
                    className={ "light green " + (color == "green" ? "ligthOn" : "")}
                    onClick={() => setColor("green")}>
                </div>
            </div>
        </div>
    );
};