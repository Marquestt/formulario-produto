import { useEffect, useState } from 'react';
import styles from './ListarProdutos.module.css';

const ListarProdutos = () => {
    const [produtos, setProdutos] = useState([]);

    const fetchProdutos = async () => {
        try {
            const response = await fetch('http://localhost:3001/produtos');
            const data = await response.json();
            const produtosOrdenados = data.sort((a, b) => a.valor - b.valor);
            setProdutos(produtosOrdenados);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    };

    useEffect(() => {
        fetchProdutos();
    }, []);

    return (
        <div className={styles.containerList}>
            <h2>Listagem de Produtos</h2>
            <ul className={styles.list}>
                {produtos.map((produto) => (
                    <li key={produto.id} className={styles.item}>
                        <strong>Nome:</strong> {produto.nome} |  
                        <strong> Valor:</strong> R$ {produto.valor.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListarProdutos;
