import React, {useState} from 'react';
import firstImage from '../img/first.png';
import '../style/Style.css';
import kidsImage from '../img/img.png';
import CalendarStatic from "./CalendarStatic";
import Timeline from "./Timeline";
import secondImage from '../img/second.png';
import GuestForm from "./GuestForm";
import Countdown from "./Countdown";
import ribbon from "../img/bant.png";

 function FirstScreen() {
     const [showMap, setShowMap] = useState(false);

     const openYandexMap = () => {
         window.open(
             `https://yandex.ru/maps/?pt=${39.619773},${47.188340}&z=17&l=map`,
             '_blank',
             'noopener,noreferrer'
         );
     };


     const mapUrl = `https://yandex.ru/maps/?pt=${39.619773},${47.188340}&z=17&l=map`;



     return (
        <div className="main-site">
            <section className="main-container">
                <div className="text-left">
                    <h1 className="wedding">Wedding</h1>
                    <p className="russian">*свадьба</p>
                </div>

                <div className="decor-img">
                    <img src={firstImage} alt="Champagne pouring" />
                </div>

                <div className="text-center">
                    <h1 className="name">Даниил & Елизавета</h1>
                </div>
            </section>

            <section className="main-container">
                <div className="greeting-wrapper">
                    <div className="kids-image-wrapper">
                        <img src={kidsImage} alt="Невеста и жених" className="kids-image" />
                    </div>

                    <div className="greeting-content">
                        <div className="content-nostalgi">
                            <h2>ДОРОГИЕ РОДНЫЕ<br />И БЛИЗКИЕ!</h2>
                            <p>Узнаете этих детишек?</p>
                            <p>Да-да, это мы! Время пролетело очень быстро, представляете?</p>
                            <p>И вот уже совсем скоро состоится самое важное событие в нашей жизни - мы станем одной семьей!</p>
                        </div>
                        <CalendarStatic />
                    </div>
                </div>
            </section>

            <section className="main-container">
                <div className="main-location"></div>

                    <div className="text-right">
                        <h1 className="wedding">Location</h1>
                        <p className="russian">*локация</p>
                    </div>
                    <div className="locatiion">
                        <p className="location_p">Донская роща</p>
                        <p className="location_p">Лофт-холл</p>
                        <p className="location_p">Ростов-на-Дону, Кумженская улица, 2А</p>
                        <button className="button" onClick={openYandexMap}>На карте</button>

                    </div>
                    <div className="text-left">
                        <h1 className="wedding">Program</h1>
                        <p className="russian">*программа</p>
                    </div>
                <Timeline/>

            </section>
            <section className="main-container-guest">
                <div className="guests-container">
                    <div className="text-right">
                        <h1 className="wedding">Details</h1>
                        <p className="russian">*детали</p>
                    </div>
                    <div className="detail" >
                        <div className="decor-img-2">
                            <img src={secondImage} alt="Champagne pouring" />
                        </div>
                        <div className="locatiion true">
                            <img src={ribbon} alt="Рисунок бантика" className="ribbon" />
                            <p className="guests-1">Дорогие гости!</p>
                            <p className="guests">Будем благодарны, если Вы воздержитесь от криков «Горько» на празднике, ведь поцелуй - знак выражения чувств, он не может быть по заказу.</p>
                            <p className="guests">Очень хочется, чтобы в этот день белый цвет остался особым акцентом для невесты, а яркие оттенки уступили место мягкой и гармоничной палитре праздника.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="main-container">
                <div className="text-left">
                    <h1 className="wedding">Form</h1>
                    <p className="russian">*анкета</p>
                </div>
                    <GuestForm/>
            </section>

            <section className="main-container">
                <div className="text-right">
                    <h1 className="wedding">Contacts</h1>
                    <p className="russian">*контакты</p>
                </div>
                <div className="text-center">
                    <p className="guests">Жених: 8 800 555 3535</p>
                    <button className="button">WhatsApp</button>
                    <p className="guests">Невеста: 8 800 05 05</p>
                    <button className="button">WhatsApp</button>

                    <div className="contarts-org">
                        <p className="guests">По всем вопросам вам поможет<br/>наша свадебный организатор</p>
                        <p className="guests">Анна: 8 800 677 67 67</p>
                    </div>
                    <button className="button">WhatsApp</button>

                </div>
                <div className="text-center">
                    <Countdown/>
                </div>

            </section>

        </div>
    );
 }

export default FirstScreen;
