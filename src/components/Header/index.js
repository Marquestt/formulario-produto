import styles from './Header.module.css';

const Header = () => {
    return(
        <header className={styles.container}>
            <h1 className={styles.title}>Formulário de cadastro e listagem de produtos</h1>
        </header>
    );
}

export default Header;