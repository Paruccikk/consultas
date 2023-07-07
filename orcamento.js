// Função para adicionar um item ao orçamento
function adicionarItem() {
  const produto = document.getElementById('produto').value;
  const quantidade = document.getElementById('quantidade').value;
  const preco = document.getElementById('preco').value;
  const total = quantidade * preco;

  const tabelaOrcamento = document.getElementById('tabela-orcamento').getElementsByTagName('tbody')[0];
  const novaLinha = tabelaOrcamento.insertRow();

  const colunaProduto = novaLinha.insertCell(0);
  const colunaQuantidade = novaLinha.insertCell(1);
  const colunaPreco = novaLinha.insertCell(2);
  const colunaTotal = novaLinha.insertCell(3);

  colunaProduto.innerHTML = produto;
  colunaQuantidade.innerHTML = quantidade;
  colunaPreco.innerHTML = preco;
  colunaTotal.innerHTML = total.toFixed(2);

  calcularTotalGeral();
}

// Função para calcular o total geral do orçamento
function calcularTotalGeral() {
  const tabelaOrcamento = document.getElementById('tabela-orcamento').getElementsByTagName('tbody')[0];
  const linhas = tabelaOrcamento.getElementsByTagName('tr');
  let totalGeral = 0;

  for (let i = 0; i < linhas.length; i++) {
    const colunaTotal = parseFloat(linhas[i].getElementsByTagName('td')[3].innerHTML);
    totalGeral += colunaTotal;
  }

  document.getElementById('total-geral').innerHTML = 'R$ ' + totalGeral.toFixed(2);
}

// Função para converter o conteúdo da tabela em imagem e baixá-la
function baixarImagem() {
  const tabelaOrcamento = document.getElementById('tabela-orcamento');

  // Use a biblioteca html2canvas para converter a tabela em uma imagem
  html2canvas(tabelaOrcamento).then(function (canvas) {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('logo.png');
    link.download = 'orcamento.png';
    link.click();
  });
}

document.getElementById('form-orcamento').addEventListener('submit', function (e) {
  e.preventDefault();
  adicionarItem();
  this.reset();
});

document.getElementById('btn-imprimir').addEventListener('click', baixarImagem);