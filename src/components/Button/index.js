import styles from './Button.module.css';

const Button = ({value}) => {
    return (
        <input className={styles.button} type='submit' value={value}/>
    );
}

export default Button;
