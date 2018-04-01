let fact = document.querySelector('#facts');
let output = document.querySelector('#output');
let numberInput = document.querySelector('#input');

numberInput.addEventListener('input', fetchFact);

function fetchFact() {
    let number = numberInput.value;

    if(numberInput != '') {
    fetch('http://numbersapi.com/'+number)
        .then((response) => response.text())
        .then((data) => {
        console.log(data);
        fact.style.display = 'block';
        output.textContent = data;
    }).catch((error) => console.log(error))
    } else {
        output.textContent = '';
    }
}