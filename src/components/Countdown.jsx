import React, { useEffect, useState, useRef } from 'react';
import glasses from '../img/third.png';
import '../style/Countdown.css';

export default function Countdown() {
    const prevTimeRef = useRef();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const calculateTimeLeft = () => {
        const targetDate = new Date('2025-08-23T13:15:00');
        const now = new Date();
        const difference = targetDate - now;

        return {
            days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
            hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
            minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
            seconds: Math.max(0, Math.floor((difference / 1000) % 60))
        };
    };

    useEffect(() => {
        prevTimeRef.current = timeLeft;
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num) => num < 10 ? `0${num}` : num;

    // Компонент для анимированного числа
    const AnimatedNumber = ({ value, label }) => {
        const [key, setKey] = useState(0);
        const prevValue = prevTimeRef.current?.[label] ?? value;

        useEffect(() => {
            if (value !== prevValue) {
                setKey(prevKey => prevKey + 1);
            }
        }, [value, prevValue]);

        return (
            <div className="circle">
                <div key={key} className="value animate-flip">
                    {formatNumber(value)}
                </div>
                <div className="label">
                    {label === 'days' ? 'дней' :
                        label === 'hours' ? 'часов' :
                            label === 'minutes' ? 'минут' : 'секунд'}
                </div>
            </div>
        );
    };

    return (
        <div className="countdown-container">
            <div className="heading-wrapper">
                <h1 className="main-title-timer">Waiting for <br/>you</h1>
                <p className="subtitle-timer">*Ждём Вас</p>
            </div>

            <div className="timer">
                <AnimatedNumber value={timeLeft.days} label="days" />
                <AnimatedNumber value={timeLeft.hours} label="hours" />
                <AnimatedNumber value={timeLeft.minutes} label="minutes" />
                <AnimatedNumber value={timeLeft.seconds} label="seconds" />
            </div>

            <div className="glass-img">
                <img src={glasses} alt="glasses clink" />
            </div>
        </div>
    );
}