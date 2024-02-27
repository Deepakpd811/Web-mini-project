const grid = document.querySelector(".grid");
const blockwidth = 100;
const blockheight = 20;
const bordWidth = 560;
const bordheight = 300;
let timerId;
let xDirection = 2;
let yDirection = 2;
let ballDiameter = 20;

const userStart = [230, 10];
let currentPosition = userStart;

const ballStart = [270, 40];
let ballCurrentPosition = ballStart;

// create a block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockwidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockheight];
    this.topRight = [xAxis + blockwidth, yAxis + blockheight];
  }
}

const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];

// console.log(blocks[0])

// draw a block
function addblock() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block);
  }
}

addblock();

// user
const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.appendChild(user);

// draw a user
function drawUser() {
  user.style.left = currentPosition[0] + "px";
  user.style.bottom = currentPosition[1] + "px";
}

// move user

let moveuser = (e) => {
  console.log(e.key);
  switch (e.key) {
    case "ArrowLeft":
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10;
        drawUser();
        break;
      }
    case "ArrowRight":
      if (currentPosition[0] < bordWidth - blockwidth) {
        currentPosition[0] += 10;
        drawUser();
        break;
      }
  }
};

document.addEventListener("keydown", moveuser);

// draw a ball

function drawBall() {
  ball.style.left = ballCurrentPosition[0] + "px";
  ball.style.bottom = ballCurrentPosition[1] + "px";
}

// add ball
const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.appendChild(ball);

// move ball

function moveBall() {
  ballCurrentPosition[0] += xDirection;
  ballCurrentPosition[1] += yDirection;

  drawBall();
  checkForCollisions();
}

timerId = setInterval(moveBall, 20);

function checkForCollisions() {

  // check for block collision
  for(let i=0; i<blocks.length;i++){
    if(
      (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0])&&
      (ballCurrentPosition[1]+ballDiameter > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1])
    ){
      const allblock = Array.from(document.querySelectorAll('.block'))
      allblock[i].classList.remove('block')
      blocks.splice(i,1);
      changeDirection();

      if(blocks.length==0){
        clearInterval(timerId)
        document.removeEventListener('keydown',moveuser);
      }



    }
  }



  // wall collision
  if (
    ballCurrentPosition[0] > bordWidth - ballDiameter ||ballCurrentPosition[1] >= bordheight - ballDiameter || ballCurrentPosition[0] <= 0
  ) {
    changeDirection();
  }
  // user collision
  if (
    (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0]+ blockwidth ) &&
    (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockheight)
  ) {
    changeDirection();
  }

  if (ballCurrentPosition[1] <= 0) {
    clearInterval(timerId);
    document.removeEventListener("keydown", moveuser);
  }
}

// game over

function changeDirection() {
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2;

    return;
  }
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2;
    return;
  }
  if (xDirection === -2 && yDirection === -2) {
    yDirection = 2;
    return;
  }
  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2;
    return;
  }
}
