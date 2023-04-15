import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import {CustomContext} from "../utils/context";
import axios from "../utils/axios";

const Form = () => {

    const [status, setStatus] = useState(false)
    const  [email, setEmail] = useState('')
    const [eye, setEye] = useState()

    const navigate = useNavigate()

    const {user, setUser} = useContext(CustomContext)


    const registerUser = (e) => {
        e.preventDefault()
        let newUser = {
            email,
            password: e.target[0].value
        }
        axios.post('/register', newUser)
            .then(({data}) => {
                setUser({
                    token: data.accessToken,
                    ...data.user
                })
                localStorage.setItem('user', JSON.stringify({
                        token: data.accessToken,
                        ...data.user
                    }
                ))
                navigate('/')
            })
            .catch((err) => console.log(err.message))
    }

    return (

        <div className="content">
            <form className='form' onSubmit={registerUser} >
                {
                    status && <p className="form__email" onClick={() => setStatus(false)}>{email}<HiOutlinePencilAlt/></p>
                }
                <h2 className="form__title">
                    {
                        status ? 'Придумай пороль для входа' : 'Регистрация'
                    }
                </h2>

                {
                    status &&
                    <>
                        <div className="form__input">
                            <input type={eye ? 'text' : 'password'} className="form__field" placeholder='Придумайте пороль'/>
                            <span className='form__eye' onClick={() => setEye(!eye)}>
                                {
                                    eye ? <AiFillEyeInvisible/> : <AiFillEye/>
                                }
                            </span>
                        </div>
                        <button className="form__btn" type='submit'>Создать аккаунт</button>
                    </>
                }
                {
                    !status &&
                        <>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form__field" placeholder='Введите Emil'/>
                            <div onClick={() => setStatus(true)} className='form__btn'>Продолжить</div>
                            <Link to="/login">Уменя уже есть аккаунт</Link>
                        </>
                }
            </form>
        </div>
    );
};

export default Form;