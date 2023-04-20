
var sp = 67836.43
var rj = 36678.66
var mg = 29229.88
var es = 27165.48
var outros = 19849.53

var valorTotal = (sp+rj+mg+es+outros);

var calcPorcentagemSp = (sp*100)/valorTotal
var calcPorcentagemRj = (rj*100)/valorTotal
var calcPorcentagemMg = (mg*100)/valorTotal
var calcPorcentagemEs = (es*100)/valorTotal
var calcPorcentagemOutros = (outros*100)/valorTotal

console.log(`faturamento total:${valorTotal.toFixed(2)}`)
console.log(`% faturamento SP:${calcPorcentagemSp.toFixed(2)}%`)
console.log(`% faturamento RJ:${calcPorcentagemRj.toFixed(2)}%`)
console.log(`% faturamento MG:${calcPorcentagemMg.toFixed(2)}%`)
console.log(`% faturamento ES:${calcPorcentagemEs.toFixed(2)}%`)
console.log(`% faturamento Outros:${calcPorcentagemOutros.toFixed(2)}%`)


var resposta = document.getElementById('res');
var faturamentoTotal = document.getElementById('fatTotal');

function finalizar(){

    faturamentoTotal.innerHTML = `O faturamento total foi de:R$ ${valorTotal.toFixed(2)}`

    resposta.innerHTML = `
    <p class = "paragrafo">SP representa :${calcPorcentagemSp.toFixed(2)}% do faturamento, Total de: R$ ${sp}</p>
    <p>RJ representa ${calcPorcentagemRj.toFixed(2)}% do faturamento, Total de: R$ ${rj}</p>
    <p>MG representa ${calcPorcentagemMg.toFixed(2)}% do faturamento, Total de: R$ ${mg}</p>
    <p>ES representa, Total de: ${calcPorcentagemEs.toFixed(2)}% do faturamento, Total de: R$ ${es}</p>
    <p class = "paragrafo2">Outros estados representam ${calcPorcentagemOutros.toFixed(2)}% do faturamento, Total de: R$ ${outros}</p>
    
    `
}