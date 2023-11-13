import React from "react";
import { useState } from "react";
import MenuLateral from "../../Components/MenuLateral/MenuLateral";
import InfosEmpresa from "../../Components/InfosEmpresa/InfosEmpresa";
import InputImagem from "../../Components/InputImagem/InputImagem";
import "./CadastroProdutos.css";
const CadastroProdutos = () => {
  const [imagem, setImagem] = useState(null);

  const handleImagemChange = (event) => {
    const arquivoImagem = event.target.files[0];

    if (arquivoImagem) {
      const leitor = new FileReader();

      leitor.onload = (e) => {
        setImagem(e.target.result);
      };

      leitor.readAsDataURL(arquivoImagem);
    }
  };

  return (
    <div className="cadastroProdutos">
      <MenuLateral className="menuLateral"></MenuLateral>
      <div className="cadastramento">
        <InfosEmpresa />
        <h2 className="tituloCadastro">Cadastramento de produtos</h2>
        <div className="informacoesProduto">
          <form action="">
            <label htmlFor="Nome">Nome do produto:</label>
            <input type="text" />
            <label htmlFor="id" className="direita">
              Id do produto:
            </label>
            <input type="number" />
            <label htmlFor="precoCusto">Preço:</label>
            <input type="number" />
            <label htmlFor="lucro" className="direita">
              Lucro*(%):
            </label>
            <input type="number" />
            <label htmlFor="precoVenda">Preço venda*:</label>
            <input type="number" />
            <label htmlFor="estoque" className="direita">
              Estoque*:
            </label>
            <input type="number" />
            <label htmlFor="tipoProduto">Tipo do produto*:</label>
            <input type="select" />
            <label htmlFor="vendedor" className="direita">
              Vendedor*:
            </label>
            <input type="number" />
            <label htmlFor="descricao" className="descricao">
              Descrição*:
            </label>
            <textarea type="text" className="inputDescricao" />
            <label htmlFor="" className="fotos">
              Adicionar fotos do produto*:
            </label>
            <div className="imagens">
              <InputImagem className="imagemUm" />
              <InputImagem className="imagemDois" />
              <InputImagem className="imagemTres" />
            </div>
            <input type="submit" value="Cadastrar" className="cadastro" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CadastroProdutos;
