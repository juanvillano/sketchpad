
const container = document.querySelector('#container');
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;

function createDivs(count, width, height) {
    for (let i = 0; i < count; i++) {
        let leDiv = document.createElement('div');
        leDiv.style.minWidth = `${width}px`;
        leDiv.style.minHeight = `${height}px`;
        container.appendChild(leDiv);
    } 
}


function getSquaresPerSide() {

    const squaresPerSide = parseInt(prompt('How many squares per side? '));

    let across = Math.floor(containerHeight / squaresPerSide);
    let down = Math.floor(containerWidth / squaresPerSide);
    let total = squaresPerSide * squaresPerSide;

    console.log('height of square: ', across);
    console.log('width of square: ', down);
    console.log('total: ', total);

    createDivs(total, across, down);
}


getSquaresPerSide();


// color divs
const divList = document.querySelectorAll("#container > div");
divList.forEach((div) => {
    div.addEventListener('mouseenter', (e) => {
        e.preventDefault();
        div.classList.add('add-color');
    });
});