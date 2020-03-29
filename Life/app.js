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
      let randomNum = Math.floor(Math.random() * 2);
      if (randomNum) arr[i][j] = 1;
      else arr[i][j] = 0;
    }
}

function drawGrid() {
  for (let i = 0; i < HEIGH; i++) {
    process.stdout.write(`\n`);
    for (let j = 0; j < WIDTH; j++) {
      if (arr[i][j] === 1) process.stdout.write(`*`);
      else process.stdout.write(` `);
    }
  }
}

function updateGrid() {}

let arr = createArray();
let newArr = createArray();

fillRandom();
drawGrid();
