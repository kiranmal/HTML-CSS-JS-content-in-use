let intervalId;
const changecolor = function () {

    //optimize of writing if code
    if (!intervalId) {

        intervalId = setInterval(bgcolor, 1000)
    }

    function bgcolor() {
        document.body.style.backgroundColor = randomColor();
    }
};
const stopchangecolor = function () {
    clearInterval(intervalId);

    //optimize by doing it null
    intervalId = null;
};
document.querySelector('#start').addEventListener('click', changecolor);


document.querySelector('#stop').addEventListener('click', stopchangecolor);
// document.querySelector("#start").addEventListener("click", function () {
//     const start = function () {
//         console.log("Start", Date.now());
//     };

//     const Stop = setInterval(start, 1000, (click = start));
//     document.querySelector("#stop").addEventListener("click", function () {
//         clearInterval(Stop);
//         console.log("stop")
//     })
// })
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
console.log(randomColor());
