//DOM References 
var input;
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var output = document.querySelector('div');
let num = 0;

plus.addEventListener('click', function(e) {
    input = document.getElementById('input').value;
    num = num + parseInt(input);

    if (num < 0) {
        output.classList.remove("black");
        output.classList.add("red");
    } else {
        output.classList.remove('red');
        output.classList.add('black');
    }
    output.textContent = num;
})

minus.addEventListener('click', function(e) {
    input = document.getElementById('input').value;
    num = num - parseInt(input);

    if (num < 0) {
        output.classList.remove("black");
        output.classList.add("red");
    } else {
        output.classList.remove('red');
        output.classList.add('black');
    }
    output.textContent = num;
})