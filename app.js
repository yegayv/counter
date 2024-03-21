// // set initial count
// let count = 0;

// //select value and buttons
// const value = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const styles = e.currentTarget.classList;
//     if (styles.contains("decrease")) {
//       count--;
//     } else if (styles.contains("increase")) {
//       count++;
//     } else {
//       count = 0;
//     }
//     if (count > 0) {
//       value.style.color = "green";
//     }
//     if (count < 0) {
//       value.style.color = "red";
//     }
//     if (count === 0) {
//       value.style.color = "black";
//     }
//     value.textContent = count;
//   });
// });
let savedCount = localStorage.getItem("count");

let count = parseInt(savedCount) ?? 0;

const decrease = document.getElementsByClassName(".decrease");
const increase = document.getElementsByClassName(".increase");
const reset = document.getElementsByClassName(".reset");
const value = document.getElementById("value");

//restore value from local storage and show it on the screen
value.textContent = savedCount ? parseInt(savedCount) : 0;

document.addEventListener("keydown", (event) => {
  if (event.key == " ") {
    resetCounter();
  }
});

function incrementCounter() {
  count++;
  localStorage.setItem("count", count);
  value.textContent = count;
  console.log(count);
}

function decrementCounter() {
  count--;
  localStorage.setItem("count", count);
  value.textContent = count;
}

function resetCounter() {
  count = 0;
  localStorage.removeItem("count");
  value.textContent = count;
}

addEventListener("wheel", (e) => {
  count += Math.sign(e.deltaY); // Add or subtract 1
  localStorage.setItem("count", count);
  value.textContent = count;
});

document
  .getElementById("incrementButton")
  .addEventListener("click", incrementCounter);
document
  .getElementById("decrementButton")
  .addEventListener("click", decrementCounter);
document.getElementById("value").addEventListener("onwheel", incrementCounter);
document.getElementById("value").addEventListener("onwheel", decrementCounter);
document.getElementById("resetButton").addEventListener("click", resetCounter);
