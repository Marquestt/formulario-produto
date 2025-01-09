import { useState } from 'react';
import Container from "./components/Container";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import ListarProdutos from "./components/ListarProdutos";


function App() {
  const [atualizarListagem, setAtualizarListagem] = useState(false);

  const handleProdutoAdicionado = () => {
      setAtualizarListagem((prev) => !prev);
  };

  return (
    <>
      <Header/>
      <Container>  
        <Form onProdutoAdicionado={handleProdutoAdicionado} />
        <ListarProdutos atualizar={atualizarListagem} />
      </Container>
      <Footer/>
    </>
  );
}

export default App;
