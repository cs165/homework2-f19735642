// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.
var b1=null,b2=null,b3=null;
const boxes1 = document.querySelectorAll('.choice-grid div[data-question-id="one"]');
const boxes2 = document.querySelectorAll('.choice-grid div[data-question-id="two"]');
const boxes3 = document.querySelectorAll('.choice-grid div[data-question-id="three"]');
for (const boxes of boxes1) {
  boxes.addEventListener('click', changeToX1);
}
for (const boxes of boxes2) {
  boxes.addEventListener('click', changeToX2);
}
for (const boxes of boxes3) {
  boxes.addEventListener('click', changeToX3);
}

function changeToX1(event) {
  const x = event.currentTarget;
  if(b1+b2+b3==3){checkLock()}
  else {
    for (const boxes of boxes1){
    if (x == boxes){
      const image = boxes.querySelector(".checkbox");
      image.src = "images/checked.png";
      x.style.backgroundColor = "#cfe3ff";
      boxes.style.opacity = 1;
      b1=x.dataset.choiceId;
      if(b1 && b2 && b3)
        checkLock();
    }
    else{
      const image = boxes.querySelector(".checkbox");
      image.src = "images/unchecked.png";
      boxes.style.backgroundColor = "#f4f4f4";
      boxes.style.opacity = 0.6;
      }
    }
  }
}
function changeToX2(event) {
  const x = event.currentTarget;
  if(b1+b2+b3==3){checkLock()}
  else {
    for (const boxes of boxes2){
    if (x == boxes){
      const image = boxes.querySelector(".checkbox");
      image.src = "images/checked.png";
      x.style.backgroundColor = "#cfe3ff";
      boxes.style.opacity = 1;
      b2=x.dataset.choiceId;
      if(b1 && b2 && b3)
        checkLock();
    }
    else{
      const image = boxes.querySelector(".checkbox");
      image.src = "images/unchecked.png";
      boxes.style.backgroundColor = "#f4f4f4";
      boxes.style.opacity = 0.6;
      }
    }
  }
}
function changeToX3(event) {
  const x = event.currentTarget;
  if(b1+b2+b3==3){checkLock()}
  else {
    for (const boxes of boxes3){
    if (x == boxes){
      const image = boxes.querySelector(".checkbox");
      image.src = "images/checked.png";
      x.style.backgroundColor = "#cfe3ff";
      boxes.style.opacity = 1;
      b3=x.dataset.choiceId;
      if(b1 && b2 && b3)
        checkLock();
    }
    else{
      const image = boxes.querySelector(".checkbox");
      image.src = "images/unchecked.png";
      boxes.style.backgroundColor = "#f4f4f4";
      boxes.style.opacity = 0.6;
      }
    }
  }
}
function checkLock(){
  const hid = document.getElementById('result');
  hid.classList.remove('hidden');
  var map;
  if(b1 == b2)
    map = b1;
  else if(b1 == b3)
    map = b1;
  else if(b2 == b3)
    map = b2;
  else
    map = b1;
  result_t.textContent = "You got: "+RESULTS_MAP[map]['title'];
  result_c.textContent = RESULTS_MAP[map]['contents'];
}
const clickReset=document.getElementById('reset');
clickReset.addEventListener('click', creset);
function creset(){
  const hid = document.getElementById('result');
  hid.classList.add('hidden');
  for (const boxes of boxes1){
    const image = boxes.querySelector(".checkbox");
    image.src = "images/unchecked.png";
    boxes.style.backgroundColor = "#f4f4f4";
    boxes.style.opacity = 1;
  }
  for (const boxes of boxes2){
    const image = boxes.querySelector(".checkbox");
    image.src = "images/unchecked.png";
    boxes.style.backgroundColor = "#f4f4f4";
    boxes.style.opacity = 1;
  }
  for (const boxes of boxes3){
    const image = boxes.querySelector(".checkbox");
    image.src = "images/unchecked.png";
    boxes.style.backgroundColor = "#f4f4f4";
    boxes.style.opacity = 1;
  }
  b1=null;
  b2=null;
  b3=null;
}
