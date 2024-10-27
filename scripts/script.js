document.addEventListener("DOMContentLoaded", function () {
let gameStarted = false;
let gameOver = false;
document.getElementById("start").addEventListener("mouseenter", function () {
    if (!gameStarted) {
        gameStarted = true;
        document.getElementById("status").textContent ="good luck :)";
        document.querySelectorAll(".boundary");
    }
});
document.getElementById("end").addEventListener("mouseenter", function () {
    if (gameStarted && !gameOver) {
        gameOver = true;
        document.getElementById("status").textContent ="you reached the end ^-^";
        document.querySelectorAll(".boundary");
        let boundaries = document.querySelectorAll(".boundary");
        for (let i = 0; i < boundaries.length; i++) {
             boundaries[i].style.backgroundColor = "green";
            }
        }
    });
    
let boundaries = document.querySelectorAll(".boundary");
for (let i = 0; i < boundaries.length; i++) {
  boundaries[i].addEventListener("mouseenter", function (){
    if (gameStarted && !gameOver) {
        for(let j=0;j<boundaries.length;j++){
            boundaries[j].classList.add("highlighted")
        } 
      document.getElementById("status").textContent = "game over :(";
      gameOver = true;
    }
  });
}
});