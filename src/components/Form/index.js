import { useState } from 'react';
import styles from './Form.module.css';
import Input from '../Input';
import TextArea from '../TextArea';
import Button from '../Button';

const Form = ({ onProdutoAdicionado }) => {
    const [formData, setFormData] = useState({
        nomeProduto: '',
        descricaoProduto: '',
        valorProduto: '',
        disponivel: 'sim',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/produtos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nome: formData.nomeProduto,
                    descricao: formData.descricaoProduto,
                    valor: parseFloat(formData.valorProduto),
                    disponivel: formData.disponivel === 'sim',
                }),
            });

            if (response.ok) {
                const novoProduto = await response.json();
                console.log('Produto adicionado:', novoProduto);
                onProdutoAdicionado(); // Atualiza a listagem de produtos
            } else {
                console.error('Erro ao adicionar o produto.');
            }
        } catch (error) {
            console.error('Erro na conexão com o servidor:', error);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome-produto">Nome do produto:</label>
                <Input
                    type="text"
                    id="nome-produto"
                    name="nomeProduto"
                    placeholder="Digite o nome do produto"
                    value={formData.nomeProduto}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="descricao-produto">Descrição do produto:</label>
                <TextArea
                    id="descricao-produto"
                    name="descricaoProduto"
                    placeholder="Descreva o produto"
                    value={formData.descricaoProduto}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="valor-produto">Valor do produto (R$):</label>
                <Input
                    type="number"
                    id="valor-produto"
                    name="valorProduto"
                    value={formData.valorProduto}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    required
                />
            </div>
            <div>
                <fieldset className={styles.fieldset}>
                    <legend>Disponível para venda:</legend>
                    <label>
                        <Input
                            type="radio"
                            name="disponivel"
                            value="sim"
                            checked={formData.disponivel === 'sim'}
                            onChange={handleChange}
                        />
                        Sim
                    </label>
                    <label>
                        <Input
                            type="radio"
                            name="disponivel"
                            value="nao"
                            checked={formData.disponivel === 'nao'}
                            onChange={handleChange}
                        />
                        Não
                    </label>
                </fieldset>
            </div>
            <div className={styles.containerButton}>
                <Button value="Salvar" type="submit"/>
            </div>
        </form>
    );
}

export default Form;