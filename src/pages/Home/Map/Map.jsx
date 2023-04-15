import React from 'react';
import {CiLocationOn} from 'react-icons/ci'
import {FiMail} from 'react-icons/fi'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube, AiOutlineWhatsApp} from 'react-icons/ai'

const Map = () => {
    return (
        <section className='map'>
            <div className="container">
                <div className="map__contact">
                    <h2 className='map__contact-title'>
                        КОНТАКТЫ
                    </h2>
                    <div className="map__contact-info">
                        <div className='map__contact-loc'>
                            <CiLocationOn className='map__contact-icon'/>
                            <p className='map__contact-desc'>
                                <span className='map__contact-text'>Наш адрес:</span> <br/>
                                МО, городской округ Красногорск, село Ильинкое,
                                Экспериментальная улица, 10</p>
                        </div>
                        <div className='map__contact-email'>
                            <FiMail className='map__contact-icons'/>
                            <p className='map__contact-desc'>
                                <span className='map__contact-text'>Наша почта:</span> <br/>
                                auto.wash@gmail.com</p>
                        </div>
                        <div className='map__contact-bron'>
                            <button className='map__contact-btn'>ЗАБРОНИРОВАТЬ СТОЛ</button>
                            <div className='map__contact-tel'>
                                <a className='map__contact-num' href="tel:+7 (917) 510-57-59">+7 (917) 510-57-59</a>
                                <p className='map__contact-text'>Звоните или оставляйте заявку</p>
                            </div>
                        </div>
                        <div className='map__contact-inter'>
                            <p className='map__contact-desc'>Мы в соц сетях:</p>
                            <div className="map__contact-insta">
                                <AiOutlineFacebook className='map__contact-inter-icon'/>
                                <AiOutlineInstagram className='map__contact-inter-icon'/>
                                <AiOutlineYoutube className='map__contact-inter-icon'/>
                                <AiOutlineWhatsApp className='map__contact-inter-icon'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Map;