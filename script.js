document.addEventListener("DOMContentLoaded", function () {
  const linhas = document.querySelectorAll('.linha-tarefa');
  const totalPontosElem = document.getElementById('total-pontos');
  const btnDesselecionar = document.getElementById('btn-desselecionar');

  function atualizarTotal() {
    let total = 0;
    linhas.forEach(linha => {
      if (linha.classList.contains('selecionada')) {
        const pontos = parseInt(linha.children[1].textContent);
        if (!isNaN(pontos)) total += pontos;
      }
    });
    totalPontosElem.textContent = total;
  }

  linhas.forEach(linha => {
    linha.addEventListener('click', () => {
      linha.classList.toggle('selecionada');
      atualizarTotal();
    });
  });

  // Desselecionar tudo ao clicar no botão
  btnDesselecionar.addEventListener('click', () => {
    linhas.forEach(linha => linha.classList.remove('selecionada'));
    atualizarTotal(); // Zera o total também
  });
});

// Ativa/desativa fundo com imagem
document.getElementById('toggle-bg-checkbox').addEventListener('change', function () {
  document.body.classList.toggle('bg-com-imagem', this.checked);
});

document.getElementById('btn-exportar-pdf').addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Título
  doc.setFontSize(18);
  doc.text('Lista de Afazeres', 14, 20);

  // Pega os dados da tabela
  const linhas = document.querySelectorAll('.linha-tarefa');
  const data = Array.from(linhas).map(linha => {
    const tarefa = linha.children[0].textContent;
    const pontos = linha.children[1].textContent;
    return [tarefa, pontos];
  });

  // Adiciona a tabela
  doc.autoTable({
    head: [['Tarefa', 'Pontos']],
    body: data,
    startY: 30
  });

  // Total de pontos
  const total = document.getElementById('total-pontos').textContent;
  doc.setFontSize(14);
  doc.text(`Total de Pontos: ${total}`, 14, doc.lastAutoTable.finalY + 10);

  // Salva o PDF
  doc.save('lista_afazeres.pdf');
});
