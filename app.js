let countdown = 10;
let rock = document.getElementById("rock")
let btn = document.getElementById("btn");
let h1 = document.getElementById("h1");
let audio = document.querySelector("audio");


btn.addEventListener("mousedown", () => {
  let intervalId = setInterval(() => {
    countdown--;
    if (countdown < 0) {
      clearInterval(intervalId);
   
    } else {
      h1.textContent = countdown;
    }
  }, 1000);
  rock.classList = "rock"
  setTimeout(() => {
    rock.classList = "fly"
  }, 10000);
  setTimeout(() => {
    audio.play()
  }, 9000);
  setTimeout(() => {
    rock.style.transform = "rotate(-46deg)"
rock.src = "https://i.pinimg.com/originals/34/c4/4b/34c44b321268000b8f7a1982365d40b9.png"
h1.innerText = ""
  }, 10000);
  btn.src = ""
});
h1.style.fontFamily = "sans-serif"
h1.style.color = "white"