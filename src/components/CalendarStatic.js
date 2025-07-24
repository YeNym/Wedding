import React from 'react';
import ribbon from '../img/bow.png';
import '../style/CalendarStatic.css'; // бантик (PNG с прозрачным фоном)

export default function CalendarStatic() {
    return (
        <div className="calendar-container">
            <img src={ribbon} alt="Рисунок бантика" className="calendar-ribbon" />

            <h2 className="calendar-title">
                <span className="mounth">Август</span> <span className="year">2025</span>
            </h2>

            <div className="calendar-grid">
                <div className="calendar-header">ПН</div>
                <div className="calendar-header">ВТ</div>
                <div className="calendar-header">СР</div>
                <div className="calendar-header">ЧТ</div>
                <div className="calendar-header">ПТ</div>
                <div className="calendar-header">СБ</div>
                <div className="calendar-header">ВС</div>

                <div></div>
                <div></div>
                <div></div>
                <div className="calendar-day">1</div>
                <div className="calendar-day">2</div>
                <div className="calendar-day">3</div>
                <div className="calendar-day">4</div>

                {[...Array(27)].map((_, i) => {
                    const day = i + 5;
                    const isCircled = day === 23;
                    return (
                        <div className="calendar-day">
                            {isCircled ? <span className="circle-calendar">{day}</span> : day}
                        </div>

                    );
                })}


            </div>
        </div>
    );
}
