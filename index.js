function calculadoraPartidasRankeadas(vitorias, derrotas) {
  const limites = [0, 10, 20, 50, 80, 90, 100]
  const categorias = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

  let nivel = "Ferro"
  let mensagem = ""

  let saldoVitorias = vitorias - derrotas
  
  for (let index = 0; index < limites.length; index++) {
    if (saldoVitorias > limites[index]) {
      nivel = categorias[index]
    }
  }
  
  mensagem = "O Herói tem saldo de " + saldoVitorias + " vitórias e está no nível de "+ nivel
  console.log(mensagem)
}

calculadoraPartidasRankeadas(100, 19);