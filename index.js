function calcular() {
  // Obtendo valores do formulário
  const nomeAcao = document.getElementById('acao-nome').value;
  const precoAtual = parseFloat(document.getElementById('preco-atual').value);
  const dpa = parseFloat(document.getElementById('dpa').value);
  const lpa = parseFloat(document.getElementById('lpa').value);
  const vpa = parseFloat(document.getElementById('vpa').value);
  const taxaDividendo = parseFloat(document.getElementById('taxa-dividendo').value) / 100;

  // Calculando Preço Teto (Método Bazin)
  const precoTeto = (dpa / taxaDividendo).toFixed(2);

  // Calculando Valor Intrínseco (Método Graham)
  const valorGraham = Math.sqrt(22.5 * vpa * lpa).toFixed(2);

  // Exibindo resultados na página
  document.getElementById('nome-acao').textContent = `Nome da Ação: ${nomeAcao}`;
  document.getElementById('cotacao-atual').textContent = `Cotação Atual: R$ ${precoAtual.toFixed(2)}`;
  document.getElementById('preco-teto').textContent = `Preço Teto (Bazin): R$ ${precoTeto}`;
  document.getElementById('valor-graham').textContent = `Valor Intrínseco (Graham): R$ ${valorGraham}`;
}
