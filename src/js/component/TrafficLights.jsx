import React, { useState } from "react";

export const TrafficLight = () => {
    const [color, setColor] = useState("red");

    return (
        <div className="container my-5">
            <div className="containerTop" ></div>
            <div className="container bg-dark p-3 rounded">
                <div className={"light red " + (color == "red" ? "lightOn" : "")}
                    onClick={() => setColor("red")}>
                </div>

                <div
                    className={"light yellow " + (color == "yellow" ? "lightOn" : "")}
                    onClick={() => setColor("yellow")}>
                </div>

                <div
                    className={"light green " + (color == "green" ? "lightOn" : "")}
                    onClick={() => setColor("green")}>
                </div>
            </div>
        </div>
    );
};