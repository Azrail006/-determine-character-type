const symbol = document.querySelector('#symbol');
const output = document.querySelector('#output')
const button = document.querySelector('.btn');

function isLetter(str) {
    return str.length === 1 && str.match(/[а-я]/i);
}

function anotherLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

button.addEventListener('click', (event) => {
  event.preventDefault()
    const result = defineSymbol((symbol.value))

   
    
    
    function defineSymbol(symbol) {
        if (Number(symbol) || symbol === 0)  {
            console.log('Это число');
        } else if (isLetter(symbol) || anotherLetter(symbol)) {
            console.log('Это буква');
        } else {
            console.log('Это символ');
        }
    
    }
})