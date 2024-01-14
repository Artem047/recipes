import styles from './Register.module.css';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";
import { database } from '../../../utils/FirebaseConfig';
import { useState } from 'react';
import { FaEye } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const onSignUp = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(database, email, password).then(() => navigate('/')).catch(err => alert(err.message))
  }
  
  return (
	<div className={styles['register']}>
    <h1 className={styles['title']}>
        Регистрация
    </h1>
      <form className={styles['form']}>
        <div className={styles['email']}>
          <img src='/mail.png' className={styles['field']} />
          <input required name='email' type="email" placeholder='Введите вашу почту...' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles['password']}>
          <img src='/lock.png' className={styles['field']} />
          <input required name='password' type={show ? 'text' : 'password'} placeholder='Введите ваш пароль...' onChange={(e) => setPassword(e.target.value)} />
          <FaEye size={30} className={styles['password-eye']} onClick={() => setShow(!show)} />
        </div>
        <button type='submit' onClick={onSignUp} className={styles['submit']}>
          Зарегистрироваться
        </button>
        <div className={styles['account']}>
          <hr width='70' color='lightgray' size='2' />
          <p>Есть аккаунт?</p>
          <hr width='70' color='lightgray' size='2'/>
        </div>
        <Link to={'/auth/login'}>Войти</Link>
      </form>
  </div>
  )
}

export default Register