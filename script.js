
const container = document.querySelector('#container');

function createDivs(count) {
    for (let i = 0; i < count; i++) {
        let div = document.createElement('div');
        container.appendChild(div);
    } 
}

let containerWidth = container.clientWidth;
let containerHeight = container.clientHeight;

let across = containerHeight / 8;
let down = containerWidth / 8;
let total = across * down;

console.log('height: ', containerHeight);
console.log('width: ', containerWidth);
console.log('total: ', total);

createDivs(total);