import styles from './TextArea.module.css';

const TextArea = ({placeholder = "", id}) => {
    return (
        <textarea className={styles.textArea} id={id} maxLength={250} placeholder={placeholder}></textarea>
    )
}

export default TextArea;