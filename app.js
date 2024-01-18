const btns = document.querySelectorAll(".btns");
let winmsg = document.querySelector(".winmsg");
let turnO = true;
function btnsdisabled() {
  btns.forEach((btns) => {
    btns.disabled = true;
  });
}
function reset() {
  btns.forEach((btns) => {
    btns.innerText = " ";
    btns.style.backgroundColor = "white";
    btns.disabled = false;
    winmsg.innerText = " ";
  });
  turnO = true;
  console.log("reset");
}

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

btns.forEach((btns) => {
  btns.addEventListener("click", (event) => {
    // console.log("clicked");
    if (turnO) {
      btns.innerText = "O";
      btns.style.backgroundColor = "yellow";
      turnO = false;
      btns.disabled = true;
    } else {
      btns.innerText = "x";
      btns.style.backgroundColor = "aqua";
      turnO = true;
      btns.disabled = true;
    }

    checkwin();
    // btns.textContent = `Click count: ${event.detail}`;
  });
});

const checkwin = () => {
  for (let pattern of winpattern) {
    // console.log(pattern[0], pattern[1], pattern[2])

    let pos1val = btns[pattern[0]].innerText;
    let pos2val = btns[pattern[1]].innerText;
    let pos3val = btns[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log(`winnwer is ${pos1val}`);
        winmsg.innerText = `Congratulation Winner Is : ${pos1val}`;
        btnsdisabled();
      } else {
        btns.disabled = true;
      }
    }
  }
};
