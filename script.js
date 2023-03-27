var imagens = [
    "ahri.png",
    "annie.png",
    "jhin.png",
    "veigar.png",
    "rengar.png",
    "blitz.png",
    "azir.png",
    "ww.png",
    "teemo.png",
    "jinx.png",
    "garen.png",
  ];

  var textos = [
    "Ahri",
    "Annie",
    "Jhin",
    "Veigar",
    "Rengar",
    "Blitz",
    "Azir",
    "Warwick",
    "Teemo",
    "Jinx",
    "Garen",
  ];

  var indiceImagemAtual = 0;

  function atualizarImagem() {
    var imagem = document.getElementById("imagem");
    imagem.src = imagens[indiceImagemAtual];
  }

  document.getElementById("anterior").addEventListener("click", function() {
    indiceImagemAtual--;
    if (indiceImagemAtual < 0) {
      indiceImagemAtual = imagens.length - 1;
    }
    atualizarImagem();
  });
  
  document.getElementById("proximo").addEventListener("click", function() {
    indiceImagemAtual++;
    if (indiceImagemAtual >= imagens.length) {
      indiceImagemAtual = 0;
    }
    atualizarImagem();
  });




  function atualizarTexto() {
    var texto = document.getElementById("texto-imagem");
    texto.textContent = textos[indiceImagemAtual];
  }

  document.getElementById("anterior").addEventListener("click", function() {
    indiceImagemAtual--;
    if (indiceImagemAtual < 0) {
      indiceImagemAtual = imagens.length - 1;
    }
    atualizarImagem();
    atualizarTexto();
  });
  
  document.getElementById("proximo").addEventListener("click", function() {
    indiceImagemAtual++;
    if (indiceImagemAtual >= imagens.length) {
      indiceImagemAtual = 0;
    }
    atualizarImagem();
    atualizarTexto();
  });