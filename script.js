
const container = document.querySelector('#container');
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;
const resetBtn = document.querySelector('#reset-btn');


let across = Math.floor(containerHeight / 100);
let down = Math.floor(containerWidth / 100);
let total = 100 * 100;


function createDivs(count, width, height) {

    for (let i = 0; i < count; i++) {
        let leDiv = document.createElement('div');
        leDiv.style.minWidth = `${width}px`;
        leDiv.style.minHeight = `${height}px`;
        container.appendChild(leDiv);
    } 

    // color divs
    const divList = document.querySelectorAll("#container > div");
    divList.forEach((div) => {
        div.addEventListener('mouseenter', (e) => {
            e.preventDefault();
            div.classList.add('add-color');
        });
    });
}

resetBtn.addEventListener('click', () => {
    container.textContent = '';

    let squaresPerSide = parseInt(prompt('How many squares per side? '));

    squaresPerSide = squaresPerSide > 100 ? 100 : squaresPerSide;

    across = Math.floor(containerHeight / squaresPerSide);
    down = Math.floor(containerWidth / squaresPerSide);
    total = squaresPerSide * squaresPerSide;

    console.log('height of square: ', across);
    console.log('width of square: ', down);
    console.log('total: ', total);
    console.log('squares per side: ', squaresPerSide);

    createDivs(total, across, down);
});

createDivs(total, across, down);