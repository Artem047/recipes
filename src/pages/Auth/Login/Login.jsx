import styles from './Login.module.css';
import { useEffect, useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { UserAuth } from '../../../context/AuthContext';

const Login = () => {
  const { setEmail, setPassword, googleSignIn, EmailAndPasswordSignIn, user } = UserAuth()

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(user != null){
      navigate('/')
    }
  }, [user])

  return (
	<div className={styles['login']}>
      <h1 className={styles['title']}>
        Авторизация
      </h1>
      <form className={styles['form']} onSubmit={(e) => EmailAndPasswordSignIn(e)}>
        <div className={styles['email']}>
          <img src='/mail.png' className={styles['field']} />
          <input name='email' type="email" placeholder='Введите вашу почту...' onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className={styles['password']}>
          <img src='/lock.png' className={styles['field']} />
          <input name='password' type={show ? 'text' : 'password'} placeholder='Введите ваш пароль...' onChange={(e)=> setPassword(e.target.value)} />
          <FaEye size={30} className={styles['password-eye']} onClick={() => setShow(!show)} />
        </div>
        <button className={styles['submit']}>
          Войти
        </button>
        <p>Или продолжить с</p>
        <button className={styles['google']} onClick={handleGoogleSignIn}>
          <FaGoogle size={30} color='white' />
          <p>Google</p>
        </button>
        <div className={styles['account']}>
          <p>У вас нет никакого аккаунта?</p>
          <Link to='/auth/register'>Зарегистрироваться</Link>
        </div>
      </form>
  </div>
  )
}

export default Login