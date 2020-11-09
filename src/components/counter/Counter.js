import React, { useState, useEffect } from 'react';


const Counter = (props) => {
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

    return (
        <div>
            <span>{days} days</span>
            <span>{hours} hours</span>
            <span>{minutes} minutes</span>
            <span>{seconds} seconds</span>
        </div>
    )
}

export default Counter;