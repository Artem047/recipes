import styles from './ButtonIcon.module.css';

const ButtonIcon = ({children}) => {
  return (
    <button className={styles['button']}>
        <div className={styles['button-icon']}>
            {children}
        </div>
    </button>
  )
}

export default ButtonIcon