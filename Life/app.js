const HEIGH = 10;
const WIDTH = 30;

function createArray() {
  let arr = [];
  for (let i = 0; i < HEIGH; i++) arr[i] = [];

  return arr;
}

function fillRandom() {
  for (let i = 0; i < HEIGH; i++)
    for (let j = 0; j < WIDTH; j++) {
      let randomNum = Math.floor(Math.random() < 0.4);
      if (randomNum) arr[i][j] = 1;
      else arr[i][j] = 0;
    }
}

function drawGrid(array) {
  for (let i = 0; i < HEIGH; i++) {
    for (let j = 0; j < WIDTH; j++) {
      if (array[i][j] === 1) process.stdout.write(`*`);
      else process.stdout.write(` `);
    }
    process.stdout.write(`\n`);
  }
}

function updateGrid(array) {
  for (let l = 1; l < HEIGH - 1; l++)
    for (let m = 1; m < WIDTH - 1; m++) {
      let aliveNeighbours = 0;
      for (let i = -1; i <= 1; i++)
        for (let j = -1; j <= 1; j++) aliveNeighbours += array[l + i][m + j];

      aliveNeighbours -= array[l][m];

      if (array[l][m] === 1 && aliveNeighbours < 2) newArr[l][m] = 0;
      else if (array[l][m] === 1 && aliveNeighbours > 3) newArr[l][m] = 0;
      else if (array[l][m] === 0 && aliveNeighbours === 3) newArr[l][m] = 1;
      else newArr[l][m] = array[l][m];
    }
}

let arr = createArray();
let newArr = createArray();

fillRandom();
drawGrid(arr);
updateGrid(arr);

console.log(`_______________________________________________`);

let timerId = setInterval(() => {
  drawGrid(newArr);
  updateGrid(newArr);
}, 100);
