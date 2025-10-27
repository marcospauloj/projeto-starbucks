alert("Hello world")


/*

    JavaScript NÃO É JAVA

    Váriáveis -> Um pedacinho de memória do computador, que você separa e pode guardar qualquer coisa.

    console.log -> Uma forma de enxergar o que eu tenho no Javasript ( dentro do navegador)

    Funções = Pedaços de código que só executam quando são chamados!

    Algoritmo

    [ ] Saber quem é o botão
    [ ] Saber quando o botão foi clicado
    [ ] Saber quem é o copo
    [ ] Trocar a imagem do copo
    [ ] Saber quem é a bola colorida
    [ ] Trocar a cor da bola colorida 
*/

let circulo = document.querySelector(".circulo")
let imagemCopo = document.querySelector(".imagem-copo")

function mudarCor(cor){
    console.log(cor)
   circulo.style.backgroundColor = cor
}


function trocaImagem(imagem) {
    imagemCopo.src = imagem

}



