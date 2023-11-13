import { React, useState } from "react";
import './InputImagem.css'
const InputImagem = (props) => {
  const [imagem, setImagem] = useState(null);

  const handleImagemChange = (event) => {
    const arquivoImagem = event.target.files[0];
    ;
    const pai = event.target.parentNode;
    const texto = pai.querySelector(".foto");
    texto.innerHTML  = "";
    if (arquivoImagem) {
      const leitor = new FileReader();

      leitor.onload = (e) => {
        setImagem(e.target.result);
      };

      leitor.readAsDataURL(arquivoImagem);
    }
  };
  return (
    <div className={props.className}>
      <div
        className="foto"
        style={{
          backgroundImage: `url(${imagem})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        Clique para Escolher a imagem
      </div>
      <input
        type="file"
        className="inputImages"
        onChange={handleImagemChange}
      />
    </div>
  );
};

export default InputImagem;
