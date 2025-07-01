const botaoDeConverter = document.querySelector(".botao-converter")

const selectMoeda1 = document.querySelector("#select-a-converter")

const selectMoeda2 = document.querySelector("#select-convertido")

const input = document.querySelector("#input-valor")

const botaoDeTroca = document.querySelector("#botao-trocar")



input.addEventListener("input", () => {
  let valor = input.value

  valor = valor.replace(/\D/g, "")

  if (valor === "") {
    input.value = ""
    return
  }

  valor = (parseFloat(valor) / 100).toFixed(2)

  input.value = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(valor)
})



function convertido () {

    const valorDoInput = document.querySelector("#input-valor").value.replace(/\D/g, "")

    if (!valorDoInput) return

    const valorAconverter = document.querySelector(".valor-a-converter")

    const valorConvertido = document.querySelector(".valor-convertido")


    const valor = parseFloat(valorDoInput) / 100


    const cotacao = {
        BRL: 1,
        USD: 5.51,
        EUR: 6.36,
        GBP: 7.43,
        JPY: 0.03,
        CNY: 0.77,
        ARS: 0.0047,
        BTC: 566728.96
}

const valorMoedaOrigem = selectMoeda1.value
const valorMoedaDestino = selectMoeda2.value

const valorEmReais = valor * cotacao[valorMoedaOrigem]
const valorFinal = valorEmReais / cotacao[valorMoedaDestino]


if (valorMoedaOrigem === "BTC") {
    valorAconverter.innerHTML = "₿ " + valor.toFixed(2)
  } 
  
else {
    valorAconverter.innerHTML = new Intl.NumberFormat("pt-BR", {
      style:"currency",
      currency: valorMoedaOrigem
    }).format(valor)
  }


if (valorMoedaDestino === "BTC") {
    valorConvertido.innerHTML = "₿ " + new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 8
    }).format(valorFinal)
}

else {
    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: valorMoedaDestino
    }).format(valorFinal)
  }

}

function mudancaSelect1 () {
    const mudancaNomeMoedaAconverter = document.querySelector(".nome-moeda-a-converter")
    const imagemMoedaAconverter = document.querySelector("#icone-moeda-a-converter")

    if (selectMoeda1.value == "USD") {
        mudancaNomeMoedaAconverter.innerHTML =  "Dolar Americano"
        imagemMoedaAconverter.src = "./assets/estados-unidos.png"
    }

    if (selectMoeda1.value == "EUR") {
        mudancaNomeMoedaAconverter.innerHTML =  "Euro"
        imagemMoedaAconverter.src = "./assets/uniao-europeia.png"
    }

    if (selectMoeda1.value == "CNY") {
        mudancaNomeMoedaAconverter.innerHTML =  "Yuan Chinês"
        imagemMoedaAconverter.src = "./assets/china.png"
    }

    if (selectMoeda1.value == "JPY") {
        mudancaNomeMoedaAconverter.innerHTML =  "Iene Japonês"
        imagemMoedaAconverter.src = "./assets/japao.png"
    }

    if (selectMoeda1.value == "ARS") {
        mudancaNomeMoedaAconverter.innerHTML =  "Peso Argentino"
        imagemMoedaAconverter.src = "./assets/argentina.png"
    }

    if (selectMoeda1.value == "GBP") {
        mudancaNomeMoedaAconverter.innerHTML =  "Libra Esterlina"
        imagemMoedaAconverter.src = "./assets/reino-unido.png"
    }

    if (selectMoeda1.value == "BTC") {
        mudancaNomeMoedaAconverter.innerHTML =  "Bitcoin"
        imagemMoedaAconverter.src = "./assets/bitcoin.png"
    }

    if (selectMoeda1.value == "BRL") {
        mudancaNomeMoedaAconverter.innerHTML =  "Real Brasileiro"
        imagemMoedaAconverter.src = "./assets/brasil.png"
    }

}

function mudancaSelect2 () {
    const mudancaMoedaConvertida = document.querySelector(".nome-moeda-convertida")
    const imagemMoedaConvertida = document.querySelector("#icone-moeda-convertida")

    if (selectMoeda2.value == "USD") {
        mudancaMoedaConvertida.innerHTML =  "Dolar Americano"
        imagemMoedaConvertida.src = "./assets/estados-unidos.png"
    }

    if (selectMoeda2.value == "EUR") {
        mudancaMoedaConvertida.innerHTML =  "Euro"
        imagemMoedaConvertida.src = "./assets/uniao-europeia.png"
    }

    if (selectMoeda2.value == "CNY") {
        mudancaMoedaConvertida.innerHTML =  "Yuan Chinês"
        imagemMoedaConvertida.src = "./assets/china.png"
    }

    if (selectMoeda2.value == "JPY") {
        mudancaMoedaConvertida.innerHTML =  "Iene Japonês"
        imagemMoedaConvertida.src = "./assets/japao.png"
    }

    if (selectMoeda2.value == "ARS") {
        mudancaMoedaConvertida.innerHTML =  "Peso Argentino"
        imagemMoedaConvertida.src = "./assets/argentina.png"
    }

    if (selectMoeda2.value == "GBP") {
        mudancaMoedaConvertida.innerHTML =  "Libra Esterlina"
        imagemMoedaConvertida.src = "./assets/reino-unido.png"
    }

    if (selectMoeda2.value == "BTC") {
        mudancaMoedaConvertida.innerHTML =  "Bitcoin"
        imagemMoedaConvertida.src = "./assets/bitcoin.png"
    }

    if (selectMoeda2.value == "BRL") {
        mudancaMoedaConvertida.innerHTML =  "Real Brasileiro"
        imagemMoedaConvertida.src = "./assets/brasil.png"
    }

}

function trocaDeValores (){

    const troca = selectMoeda1.value
    selectMoeda1.value = selectMoeda2.value
    selectMoeda2.value = troca

    mudancaSelect1()
    mudancaSelect2()
    convertido()
}


botaoDeTroca.addEventListener("click",trocaDeValores)
selectMoeda1.addEventListener("change",mudancaSelect1)
selectMoeda2.addEventListener("change",mudancaSelect2)
botaoDeConverter.addEventListener("click",convertido)