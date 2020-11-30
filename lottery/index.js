// toggle buttons

function toggle(e) {
    const finder = document.querySelector('.active');
    finder.classList.remove('active');
    const targ = document.querySelector(`#option${e}`)
    targ.classList.add('active');
}

// generate for selected game

let selected = document.querySelector('.active');

// generate

const submit = document.getElementById('generate');

let numbers = [];
function generate(min, max) {
    min = Math.ceil(min);
    max = Math.max(max);
    return Math.round(Math.random() * (max - min) + min);
}

const create = (min, max, draw) => {
    numbers = [];
    for (numbers.length; numbers.length < draw;) {
        const numb = generate(min, max);
        if (numbers.includes(numb)) {
            delete numb;
            // console.log('doubles');
        } else {
            numbers.push(numb);
        }
    }

    return numbers.sort(function (a, b) { return a - b });
}

const display = document.querySelector('.numbers');

submit.addEventListener('click', e => {

    let result;
    let main;
    let special;
    let final;
    let selected = document.querySelector('.active');
    if (selected.textContent === 'LOTTO') {
        result = create(1, 59, 6);
        final = result.map(v => '<div class="circle red" id="width"><h2>' + v + '</h2></div>').join('');
    } else if (selected.textContent === 'THUNDERBALL') {
        main = create(1, 39, 5);
        special = create(1, 14, 1);
        final = main.map(v => '<div class="circle border"><h2>' + v + '</h2></div>').join('') + special.map(v => '<div class="circle purple"><h2>' + v + '</h2></div>').join('');
    } else if (selected.textContent === 'EUROMILLIONS') {
        main = create(1, 50, 5);
        special = create(1, 12, 2);
        final = main.map(v => '<div class="circle border"><h2>' + v + '</h2></div>').join('') + special.map(v => '<div class="circle yellow"><h2>' + v + '</h2></div>').join('');
    }

    return display.innerHTML = final;
})
