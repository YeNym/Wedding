import React from 'react';
import '../style/Timeline.css';

const timelineData = [
    {
        time: '13:15',
        title: 'Регистрация',
        description: 'Аксай, пер. Бондарчука 18',
        dop: 'Учитывая расстояние между локациями и перерыв между мероприятиями, мы оставляем этот момент на ваше усмотрение. Главное для нас - ваше присутствие на праздничном ужине!'
    },
    {
        time: '17:00',
        title: 'Банкет',
        description: 'Время вкусной еды, танцев и развлечений',
        dop: ''
    },
    {
        time: '00:00',
        title: 'Завершение',
        description: 'Мы очень благодарны, что Вы провели с нами этот чудесный день!',
        dop: ''
    }
];

export default function Timeline() {
    return (
        <div className="timeline-wrapper">
            <div className="timeline-grid">
                {timelineData.map((item, index) => (
                    <div className="timeline-row" key={index}>
                        <div className="timeline-left">
                            <div className="timeline-time">{item.time}</div>
                            <div className="timeline-title">{item.title}</div>
                        </div>

                        <div className="timeline-line" />

                        <div className="timeline-right">
                            <div className="timeline-list">
                                {item.description}
                            </div>
                            {item.dop && <p className="timeline-dop">{item.dop}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
