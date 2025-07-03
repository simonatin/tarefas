document.addEventListener("DOMContentLoaded", function () {
  const linhas = document.querySelectorAll('.linha-tarefa');
  const totalPontosElem = document.getElementById('total-pontos');
  const btnDesselecionar = document.getElementById('btn-desselecionar');
  const inputExtras = document.getElementById('pontos-extras');

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

  linhas.forEach(linha => {
    linha.addEventListener('click', () => {
      linha.classList.toggle('selecionada');
      atualizarTotal();
    });
  });

  inputExtras.addEventListener('input', atualizarTotal);
  
  btnDesselecionar.addEventListener('click', () => {
    linhas.forEach(linha => linha.classList.remove('selecionada'));
    atualizarTotal();
  });

  atualizarTotal(); // inicializa
});

// Alterna fundo com imagem
document.getElementById('toggle-bg-checkbox').addEventListener('change', function () {
  document.body.classList.toggle('bg-com-imagem', this.checked);
});

  // Desselecionar tudo ao clicar no botão
  btnDesselecionar.addEventListener('click', () => {
    linhas.forEach(linha => linha.classList.remove('selecionada'));
    atualizarTotal(); // Zera o total também
  });
;
// Ativa/desativa fundo com imagem
document.getElementById('toggle-bg-checkbox').addEventListener('change', function () {
  document.body.classList.toggle('bg-com-imagem', this.checked);
});
