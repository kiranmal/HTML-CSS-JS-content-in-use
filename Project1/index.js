console.log("hello");
const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');//for selecting the body

//for selecting the button to provide some event on that button on class 
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey')//grey red yellow green
        {
            body.style.backgroundColor = e.target.id//is same as grey
        }
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id
        }
    });
})