const alternatives = [
    {text:"", images:"images/cat-01.gif"},
    {text:"Daleee di que si 👉👈 no te arrepentiras", images:"images/cat-02.gif"},
    {text:"Aaa y sigues 😭, si no fuera porque estoy loco por ti amor, me enojaría", images:"images/cat-03.gif"},
    {text:"Mejor ya dime que no me amas y dejo de cotizar cuanto cuestan las bodas 😠", images:"images/cat-04.gif"},
    {text:"En serio? 😒 bueno no importa igual la pasaras conmigo, ya me deshare de tus amiguitos para que solo seas mía 🥰", images:"images/cat-05.gif"}
];
const ohyes = {text:"Amor te amo mucho, ahora que ya aceptaste te espera un día muy bonito, trataré de consentirte como te mereces en este día que es nuestro, el primero de muchos, espero que te guste este detalle gg 👉👈", images:"images/cat-yes.gif",};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
function updateDisplay(item) {
    console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === 'SÍ'){
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
        }
        if (button.textContent === 'NO'){
            count++;
            if(count < alternatives.length){
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});