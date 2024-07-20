let num;

// Add number buttons
for (let row = 1; row <=3; row++) {

const buttonsContainer = document.getElementById(`buttonsContainer${row}`);
switch(row) {
    case 1:
        num = 7;
        break;
    case 2:
        num = 4;
        break;
    case 3:
        num = 1;
        break;
}
for (let number = num; number <= num + 2; number++) {
    const button = document.createElement('button');
    button.className = "btn btn-outline-secondary";
    button.innerText = number;

    button.addEventListener("click", function() {
        console.log(number);
        addToResult(number);

    });
    buttonsContainer.appendChild(button);    
}
}