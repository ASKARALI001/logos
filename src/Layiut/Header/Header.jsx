import React, {useContext} from 'react';
import { BiMap } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci';
import { BsPerson } from 'react-icons/bs';
import { BsTelephonePlus } from 'react-icons/bs';
import {Link, useNavigate} from "react-router-dom";
import {CustomContext} from "../../utils/context";

const Header = () => {

    const navigate = useNavigate()

    const logOutUser = () => {
        setUser({
            email: ''
        })
        localStorage.removeItem('user')
        navigate('/login')
    }

    const {user, setUser} = useContext(CustomContext)
    return (
        <header className="header">
            <div className="container">
                <div className='header__flex'>
                    <div className="header__right">
                        <h1 className="header__title"><Link to='/'>LOGOS</Link></h1>
                        <div className="header__between">
                            <div className="header__search">
                                <span className="header__search-map"><BiMap size={20}/></span>
                                <input className="header__between-input" placeholder='Введите адрес доставки' type="text"/>
                                <span className="header__search-ser"><CiSearch size={20}/></span>
                            </div>
                            <div className="header__contact">
                                <span className="header__contact-span"><BsTelephonePlus /></span>
                                <div className='header__contact-text'>
                                    Контакты: <br/>
                                    <a href="tel:+7 (917) 510-57-59" className='header__contact-num'>
                                        +7 (917) 510-57-59</a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='header__person'>
                        {
                            user.email.length ?
                                <span onClick={logOutUser}>
                                <BsPerson/> Выйти
                            </span> :
                                <Link to={'/register'}>
                                    <BsPerson/>
                                    Войти
                                </Link>
                        }
                    </div>



                    <button className='header__btn'>
                        Корзина
                        <span className='header__btn-col'>4</span>
                    </button>
                </div>
            </div>


        </header>
    );
};

export default Header;