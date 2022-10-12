let Grid = document.getElementsByClassName("grid")[0];
for (let i = 0; i < 200; ++i) {
  let div = document.createElement("div");
  div.className = "box";
  Grid.appendChild(div);
}
for (let i = 0; i < 10; ++i) {
  let div = document.createElement("div");
  div.className = "taken";

  Grid.appendChild(div);
}

let Boxes = Array.from(document.querySelectorAll(".grid div"));
console.log(Boxes);
let width = 10;
let ztetris = [
  [0, width, width + 1, width * 2 + 1],
  [0, 1, width + 1, width + 2],
  [1, width, width + 1, width * 2],
  [1, 2, width, width + 1],
];

let ltetris = [
  [1, width + 1, width * 2 + 1, 2],
  [width, width + 1, width + 2, width * 2 + 2],
  [1, width + 1, width * 2 + 1, width * 2],
  [width, width * 2, width * 2 + 1, width * 2 + 2],
];

let otetris = [
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
];

let ttetris = [
  [1, width, width + 1, width + 2],
  [1, width + 1, width + 2, width * 2 + 1],
  [width, width + 1, width + 2, width * 2 + 1],
  [1, width, width + 1, width * 2 + 1],
];

let itetris = [
  [1, width + 1, width * 2 + 1, width * 3 + 1],
  [width, width + 1, width + 2, width + 3],
  [1, width + 1, width * 2 + 1, width * 3 + 1],
  [width, width + 1, width + 2, width + 3],
];

let Tetris = [ltetris, otetris, ttetris, itetris, ztetris];
let curpos=0,random=Math.floor(Math.random() * 4);
let draw = Tetris[random][curpos];
let cur = 4;

function drawTetris() {
  draw.forEach((item) => {
    // console.log(item);
    Boxes[item + cur].classList.add("tetris");
  });
}
drawTetris();

function undraw() {
  draw.forEach((item) => {
    // console.log(item);
    Boxes[item + cur].classList.remove("tetris");
  });
}

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 37) {
    console.log('lft')
    undraw();

    if (!draw.some((item) => (cur + item) % 10===0))cur-=1;
    if(draw.some(item=>Boxes[cur+item].classList.contains('taken'))){
        cur+=1;
    }

    drawTetris();
  }
  console.log(e.keyCode)
if(e.keyCode==39){
    undraw();

    if (!draw.some((item) => (cur + item+1) % 10 === 0)) cur += 1;
    if(draw.some(item=>Boxes[cur+item].classList.contains('taken')))

cur-=1;
    drawTetris();

}
console.log(e.keyCode)
if(e.keyCode==38){

    undraw();
    curpos=(curpos+1)%4;
    draw=Tetris[random][curpos];
    console.log(curpos)
drawTetris()
}

});
setInterval(movedown, 1000);

function movedown() {
  undraw();
  cur += 10;
  drawTetris();

  freeze();
}

function freeze() {
  if (draw.some((item) => Boxes[item + cur + 10].classList.contains("taken"))) {
    draw.forEach((item) => Boxes[item + cur].classList.add("taken"));
    cur = 4;
    random=Math.floor(Math.random()*4)
    curpos=0;
    draw = Tetris[random][curpos];

    if (
      draw.some((item) =>
        Boxes[item + cur + 10].classList.contains("taken")
      ) === false
    )
      drawTetris();
  }
}
