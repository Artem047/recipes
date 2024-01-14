import styles from './TouchContact.module.css';

const TouchContact = () => {
  return (
    <div className={styles['touch']}>
        <h1>Let’s Stay In Touch!</h1>
        <p>Join our newsletter, so that we reach out to you with our news and offers.</p>
        <form className={styles['touch-form']}>
            <input required type="email" placeholder='Enter Your Email' />
            <button type='submit'>Subscribe</button>
        </form>
    </div>
  )
}

export default TouchContact