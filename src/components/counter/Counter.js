import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import './counter.css'

const Counter = (props) => {
    const history = useHistory();

    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const email = props.params.match.params.email
    useEffect(() => {
        const emailStored = localStorage.getItem(email)
        if (emailStored) {
            const now = Date.now() //timestamp rightnow
            const differenceInMiliseconds = (now - emailStored) / 1000
            const days = Math.floor(differenceInMiliseconds / (3600 * 24));
            setDays(days)
            const hours = Math.floor(differenceInMiliseconds % (3600 * 24) / 3600);
            setHours(hours)
            const minutes = Math.floor(differenceInMiliseconds % 3600 / 60);
            setMinutes(minutes)
            const seconds = Math.floor(differenceInMiliseconds % 60);
            setSeconds(seconds)
            
            localStorage.setItem(email, Date.now())
        }
    }, [email])
    const handleLogout = () => {
        history.push("/")
    }
    return (
        <div className="counter_section">
        <h1>Welcome!</h1>
        <p>The last time you accessed was</p>
        <div className="counter_container">
            <div className="number">{days} <span>days</span></div>
            <div className="number">{hours} <span>hours</span></div>
            <div className="number">{minutes} <span>minutes</span></div>
            <div className="number">{seconds} <span>seconds</span></div>
        </div>
        <button className="logout-btn" onClick={handleLogout}>LOGOUT</button>
        </div>
    )
}

export default Counter;