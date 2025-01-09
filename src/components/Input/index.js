import styles from './Input.module.css';

const Input = ({
    type = "text",
    placeholder = "",
    id,
    name,
    required = true,
    value,
    onChange,
    min,
    step,
    ...rest
}) => {
    return (
        <input 
            className={styles.input}
            type={type}
            placeholder={placeholder}
            id={id}
            name={name}
            required={required}
            value={value}
            onChange={onChange} // Adicionado
            min={min}
            step={step}
            {...rest}
        />
    )
}
    
export default Input;