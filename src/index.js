import css from './css/main.css';
const numberCounter = document.querySelector('.number');
const btnIncrease = document.querySelector('.btn-increase');
const btnDecrease = document.querySelector('.btn-decrease');
const btnReset = document.querySelector('.btn-reset');
let newNumber = Number(numberCounter.textContent);
//Change the color of the number 
const checkColor = () => {
    if (newNumber >= 1) {
        numberCounter.style.color = '#00b306';
    } else if ( newNumber < 0){
        numberCounter.style.color = '#d40000';
    } else {
        numberCounter.style.color = '#383838';
    }
};
//Increase the counter when click
btnIncrease.addEventListener('click', () => {
    newNumber++;
    numberCounter.textContent = newNumber;
    checkColor(); //Change color
});

//Decrease the counter when click
btnDecrease.addEventListener('click', () => {
    newNumber--;
    numberCounter.textContent = newNumber;
    checkColor(); //Change color
});

//Reset counter to 0
btnReset.addEventListener('click', () => {
    newNumber = 0;
    numberCounter.textContent = newNumber;
    checkColor(); //Change color
});
