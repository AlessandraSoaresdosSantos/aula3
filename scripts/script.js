function executar()
{
  const resultado = document.getElementById("resultado");

  let primeiroValor = prompt('Digite o primeiro número')
  let segundoValor = prompt('Digite o segundo número')
 
  resultado.innerHTML =  somar(primeiroValor,segundoValor);
  resultado.style.backgroundColor = "yellow";
}