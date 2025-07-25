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

     const openYandexMap = () => {
         window.open(
             `https://yandex.ru/maps/?pt=${39.619773},${47.188340}&z=17&l=map`,
             '_blank',
             'noopener,noreferrer'
         );
     };
     const openYandexMapAksay = () => {
         window.open(
             `https://yandex.ru/maps/?pt=${39.873521},${47.254602}&z=17&l=map`,
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

                        <p className="location_p">Регистрация: </p>
                        <p className="location_p">Аксай, пер. Бондарчука 18</p>
                        <button className="button" onClick={openYandexMapAksay}>На карте</button>

                        <p className="location_p">Банкет: </p>
                        <p className="location_p">Донская роща, Лофт-холл</p>
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
                    <p className="guests">Жених: +7 989 500 8010</p>
                    <button className="button">
                        <a
                        href="https://wa.me/79895008010"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WhatsApp
                    </a>
                    </button>
                    <p className="guests">Невеста: +7 950 861 4321</p>
                    <button className="button">    <a
                        href="https://wa.me/79508614321"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WhatsApp
                    </a>
                    </button>

                    <div className="contarts-org">
                        <p className="guests">Если вы хотите подготовить нам творческий сюрприз или поздравление, обратитесь к нашему ведущему Роману</p>
                        <p className="guests">+7 908 170 4479</p>
                    </div>
                    <button className="button"><a
                        href="https://wa.me/79081704470"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WhatsApp
                    </a></button>
                </div>
                <div className="text-center">
                    <Countdown/>
                </div>

            </section>

        </div>
    );
 }

export default FirstScreen;
