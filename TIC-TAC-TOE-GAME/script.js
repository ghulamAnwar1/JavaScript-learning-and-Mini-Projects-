let boxes = document.querySelectorAll(".box");
let ResetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //playerX, player0

const reset_game = () => {
  turn0 = true;
  enable_boxes();
  msgContainer.classList.add("hide");
};

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    chk_winner();
  });
});

const disable_boxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enable_boxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const show_winner = (winner) => {
  msg.innerText = `Congratulations winner is: ${winner}`;
  msgContainer.classList.remove("hide");
  disable_boxes();
};

const chk_winner = () => {
  for (let pattern of winPatterns) {
    // FIX: Access innerText correctly by first getting the element, then its innerText
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        show_winner(pos1val);
      }
    }
  }
};

newGameBtn.addEventListener("click", reset_game);
ResetBtn.addEventListener("click", reset_game);
