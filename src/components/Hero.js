import React from "react";
import group from "../assets/Group 77.png";


export default function Hero() {
    return (
        <div className="hero">
            <img src={group} alt="Group of Pictures" className="groupImage"></img>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}
