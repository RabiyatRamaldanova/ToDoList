const input =  document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');

function createElement(value) {
    const liElement = document.createElement('li');
    liElement.className = 'li';
    liElement.textContent = value;
    const buttonElement = document.createElement('button');
    buttonElement.className = 'btn';
    buttonElement.textContent = 'delete';
    liElement.appendChild(buttonElement);
    result.appendChild(liElement);
    btn.addEventListener('click', (event) => {
        createElement(input.value);
        input.value = "";
    });
    buttonElement.addEventListener('click', (event) => {
        result.removeChild(liElement);
    });
}


