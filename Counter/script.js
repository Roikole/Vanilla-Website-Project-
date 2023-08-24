let count = 0;

let minusButton = document.getElementById('minusButton');
let plusButton = document.getElementById('plusButton');
let countInput = document.getElementById('countInput');

minusButton.addEventListener("click", () => {
    count--;
    countInput.value = count;
})
    
plusButton.addEventListener('click', () => {
    count++;
    countInput.value = count;
})
