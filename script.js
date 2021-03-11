const circle = document.querySelector('#circleBlock');
const circleAbsolute = document.querySelector('#circleAbsolute');
let TIMER;
let count = 1;
let secondTIMER;
let currScale = 300;

function grow() {
    circle.innerHTML = 'Breathe In!<br> Дыши!';
    count = count + .001;
    circle.style.transform = `scale(${count})`;
}

TIMER = setInterval(grow, 15);

setTimeout(function() {
    clearInterval(TIMER);
    circle.innerHTML = 'Hold!<br> Замри!';
}, 4000);

setTimeout(function() {
    secondTIMER = setInterval(function decreaseCircle() {
                        circle.innerHTML = 'Breathe Out!<br> Выдыхни!';
                        count = count - .001;
                        circle.style.transform = `scale(${count})`;
                    }, 15);
}, 6000)

setTimeout(function() {
    clearInterval(secondTIMER);
}, 10000);

function main() {
    function grow() {
        circle.innerHTML = 'Breathe In!<br> Дыши!';
        count = count + .001;
        circle.style.transform = `scale(${count})`;
    }
    
    TIMER = setInterval(grow, 15);
    
    setTimeout(function() {
        clearInterval(TIMER);
        circle.innerHTML = 'Hold!<br> Замри!';
    }, 4000);
    
    setTimeout(function() {
        secondTIMER = setInterval(function decreaseCircle() {
                            circle.innerHTML = 'Breathe Out!<br> Выдыхни!';
                            count = count - .001;
                            circle.style.transform = `scale(${count})`;
                        }, 15);
    }, 6000)
    
    setTimeout(function() {
        clearInterval(secondTIMER);
    }, 10000);
}

setInterval(main, 10000);


function animation(args, elem) { // некоторые аргументы определим на будущее
    var $ = {
      radius  :     250, // радиус окружности 
      speed   :     20 // скорость/задержка ( в js это мс, например 10 мс = 100 кадров в секунду)
    }
    var f = 0;
    var s = 2 * Math.PI / 180; //Вычислим угол
    setInterval(function() { // функция движения 
      f += s; // приращение аргумента
        circleAbsolute.style.left =  235 + $.radius * Math.sin(f)  + 'px'; // меняем координаты элемента, подобно тому как мы это делали в школе в декартовой системе координат. Правда, в данном случае используется полярная система координат, изменяя угол
        circleAbsolute.style.top =   235 + $.radius * Math.cos(f) + 'px';
    }, $.speed)
}