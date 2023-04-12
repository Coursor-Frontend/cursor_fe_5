let element     = document.getElementById('element');
let button      = document.getElementById('showHideBtn');
let newElement  = document.getElementById('newElement');

let changeColor = () => {
    element.classList.add("mystyle"); 
}

let showHide = () => {
    if (element.getAttribute('hidden') !== null) {
        element.removeAttribute("hidden");
        button.innerText = 'hide element'
    } else {
        element.setAttribute("hidden", '');
        button.innerText = 'show element'
    }  
}

let createELement = () => {
    newElement.innerHTML = '<h2 id="element">created element</h2>'
}