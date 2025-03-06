function olaMundo() {
    console.log('Ola Mundo');
}

olaMundo()

function recebeNome(nome) {
    // let nome = prompt('Qual o seu nome?');
    console.log(`Ola ${nome}!`);
}

recebeNome('Alice')

function dobroNumero(n) {
    console.log(parseInt(n*2))
}

dobroNumero(7)

function nmedia(a, b, c) {
    return (a+b+c)/3
}

let resultadoNMedia = nmedia(4, 6, 2)
console.log(resultadoNMedia)

function maiorNumero(a, b) {
    return a > b ? a : b;
}

let resultadoMaior = maiorNumero(9, 197);
console.log(resultadoMaior);

function multi(n) {
    return n*n;
}

let resMulti = multi(9);
console.log(resMulti);