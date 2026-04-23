
const container = document.querySelector('#container');

function createDivs(count) {
    for (let i = 0; i < count; i++) {
        let div = document.createElement('div');
        container.appendChild(div);
    } 
}

let containerWidth = container.clientWidth;
let containerHeight = container.clientHeight;

let across = containerHeight / 4;
let down = containerWidth / 4;
let total = across * down;

console.log('height: ', containerHeight);
console.log('width: ', containerWidth);
console.log('total: ', total);

createDivs(total);

const divList = document.querySelectorAll("#container > div");
divList.forEach((div) => {
    div.addEventListener('mouseenter', (e) => {
        e.preventDefault();
        div.classList.add('add-color');
    });
});