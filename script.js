document.addEventListener("DOMContentLoaded", function () {
  const linhas = document.querySelectorAll('.linha-tarefa');
  const totalPontosElem = document.getElementById('total-pontos');
  const btnDesselecionar = document.getElementById('btn-desselecionar');
  const btnSelecionar = document.getElementById('btn-selecionar');
  const inputExtras = document.getElementById('pontos-extras');
  const linhaPontosAcumulados = document.querySelector('tr.pts-acm');

  function atualizarTotal() {
    let total = 0;

    linhas.forEach(linha => {
      if (linha.classList.contains('selecionada')) {
        const pontos = parseInt(linha.children[1].textContent);
        if (!isNaN(pontos)) total += pontos;
      }
    });

    const extras = parseInt(inputExtras.value) || 0;
    total += extras;
    totalPontosElem.textContent = total;
  }

  function atualizarClassePontosAcumulados() {
    const valor = parseInt(inputExtras.value) || 0;
    if (valor > 0) {
      linhaPontosAcumulados.classList.add('valor-positivo');
    } else {
      linhaPontosAcumulados.classList.remove('valor-positivo');
    }
  }

  linhas.forEach(linha => {
    linha.addEventListener('click', () => {
      linha.classList.toggle('selecionada');
      atualizarTotal();
    });
  });

  inputExtras.addEventListener('input', () => {
    atualizarClassePontosAcumulados();
    atualizarTotal();
  });

  btnSelecionar.addEventListener('click', () => {
    linhas.forEach(linha => linha.classList.add('selecionada'));
    atualizarTotal();
  });

  btnDesselecionar.addEventListener('click', () => {
    linhas.forEach(linha => linha.classList.remove('selecionada'));
    atualizarTotal();
  });

  atualizarClassePontosAcumulados();
  atualizarTotal();
});


  // Funcionalidade do botão "Selecionar Tudo"
  btnSelecionar.addEventListener('click', () => {
    linhas.forEach(linha => linha.classList.add('selecionada'));
    atualizarTotal();
  });

  // Funcionalidade do botão "Desselecionar Tudo"
  btnDesselecionar.addEventListener('click', () => {
    linhas.forEach(linha => linha.classList.remove('selecionada'));
    atualizarTotal();
  });

  atualizarTotal(); // inicializa
;

// Alterna fundo com imagem
document.getElementById('toggle-bg-checkbox').addEventListener('change', function () {
  document.body.classList.toggle('bg-com-imagem', this.checked);
});

// Ativa/desativa fundo com imagem
document.getElementById('toggle-bg-checkbox').addEventListener('change', function () {
  document.body.classList.toggle('bg-com-imagem', this.checked);
});
