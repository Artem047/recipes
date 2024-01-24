import styles from './ButtonIcon.module.css';

const ButtonIcon = ({children, click}) => {
  return (
    <button onClick={click} className={styles['button']}>
        <div className={styles['button-icon']}>
            {children}
        </div>
    </button>
  )
}

export default ButtonIcon