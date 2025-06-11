import { useState } from 'react'
import './CountDownTimer.css'

const CountDownTimer = ({Time}) => {

    const[timerDays, setTimerDays] = useState('00')
    const[timerHours, setTimerHours] = useState('00')
    const[timerMinutes, setTimerMinutes] = useState('00')
    const[timerSeconds, setTimerSeconds] = useState('00')

        setInterval(() => {
        const selectedDate = new Date(Time).getTime()
        const CurrentDate = new Date().getTime();
        const MiddleTime = selectedDate - CurrentDate;
        const Days = Math.floor(MiddleTime / (60*60*24*1000));
        const Hours = Math.floor((MiddleTime % (60*60*24*1000))/(1000*60*60));
        const Minutes = Math.floor((MiddleTime%(60*60*1000))/(60*1000));
        const Seconds = Math.floor((MiddleTime%(1000*60))/(1000));

        setTimerDays(Days)
        setTimerHours(Hours)
        setTimerMinutes(Minutes)
        setTimerSeconds(Seconds)

    },1000)

    return(
        <div className='CountDownTimer'>
            <p>{timerDays}</p> :
            <p>{timerHours}</p> :
            <p>{timerMinutes}</p> :
            <p>{timerSeconds}</p>
        </div>
    )
}

export default CountDownTimer;