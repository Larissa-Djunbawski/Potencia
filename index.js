// Para instalar o pacote prompt-sync no terminal: npm i prompt-sync, dentro da pasta de seu projeto

// Importa o pacote prompt-sync para poder ler as entradas do usuário
const prompt = require('prompt-sync')();

// Pergunta ao usuário para digitar a base
let base = prompt('Qual será a base dessa exponenciação? ');

// Pergunta ao usuário para digitar o expoente
let expoente = +prompt('E o expoente? ')
let resultado = 1
let base_aux = 1


for(j = 0; j < expoente; j++){
    resultado = 0
    for (let i = 0; i < base; i++){
        resultado += base_aux
        
       }
       base_aux = resultado
}
console.log(resultado)




//repetir o resultado quantas vezes se igualar ao número do expoente, se for 7 ao cubo, irá repetir 7 3 vezes e acrecentar ao resultado
  
    



