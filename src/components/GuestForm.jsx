import React, { useRef } from 'react';
import '../style/GuestForm.css';
import ribbon from "../img/bant.png";

export default function GuestForm() {
    const formRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = formRef.current;
        const formData = new FormData(form);

        const data = {
            name: formData.get('name'),
            attendance: formData.get('attendance'),
            registry: [
                formData.get('answer') === 'yes' ? 'Да' : '',
                formData.get('answer') === 'no' ? 'Нет' : ''
            ].filter(Boolean).join(', ')
        };

        await fetch('https://script.google.com/macros/s/AKfycbyTAXPF6duPxqjOA0_sJ6iDzCvU7Xw7HLVKQOxDT3hSbl8z5stnfVHHs6kwZsfLYUQ9/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        alert('Форма отправлена!');
        form.reset();
    };

    return (
        <form className="guest-form" ref={formRef} onSubmit={handleSubmit}>
            <h2 className="form-title">Ответьте, пожалуйста, на несколько вопросов, которые мы для Вас подготовили</h2>

            <div className="arrow">&#x21E3;</div>

            <div className="name-input">
                <label htmlFor="name" className="label-form">Напишите, пожалуйста, Ваши ФИО</label>
                <input type="text" id="name" name="name" placeholder="Ваши ФИО" className="input" required />
            </div>

            <fieldset>
                <legend>Сможете ли присутствовать на нашем торжестве?</legend>
                <label><input type="radio" name="attendance" value="Я с удовольствием приду" required /> <span>Я с удовольствием приду</span></label>
                <label><input type="radio" name="attendance" value="Буду со своей парой" /> <span>Буду со своей парой</span></label>
                <label><input type="radio" name="attendance" value="Буду с ребенком" /> <span>Буду с ребенком</span></label>
                <label><input type="radio" name="attendance" value="К сожалению, не смогу присутствовать" /> <span>К сожалению, не смогу присутствовать</span></label>
            </fieldset>

            <fieldset>
                <legend>Придете ли вы в ЗАГС на регистрацию?</legend>
                <label><input type="checkbox" name="answer" value="yes" /> <span>Да</span></label>
                <label><input type="checkbox" name="answer" value="no" /> <span>Нет</span></label>
            </fieldset>

            <div className="button-wrapper-form">
                <button type="submit" className="button-send">Отправить</button>
                <img src={ribbon} alt="Рисунок бантика" className="ribbon-animated" />
            </div>
        </form>
    );
}
