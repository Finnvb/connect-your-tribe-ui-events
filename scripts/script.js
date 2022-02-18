let Button = document.getElementsByTagName("a");
document.querySelector('p').style.color = '#7ce7c9';


for (let i = 0; i < Button.length; i++) {

    Button[i].addEventListener('click', changeColor);

    function changeColor() {

        Button[i].classList.toggle('purple');
    }

}



// Doubleclick event

let interfaceButton = document.getElementsByClassName("dblclick");

for (let i = 0; i < interfaceButton.length; i++) {
    interfaceButton[i].addEventListener('dblclick', changeColorDblClick);

    function changeColorDblClick() {
        interfaceButton[i].classList.toggle('green');

    }
}


// keydown event


document.addEventListener('keydown', reset);

function reset(e) {

    if (e.key == "r" || e.key == "R") {
        for (let i = 0; i < Button.length; i++) {
            Button[i].classList.remove('purple', 'green');
        }
    }
}

//longpress event
