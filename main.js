let color = document.querySelector(".color"),
  colorBox = document.querySelector(".color-box"),
  genBtn = document.querySelector("#generate"),
  clip = document.querySelector("#clip");

colorBox.style.backgroundColor = color.innerText;

genBtn.addEventListener("click", () => {
  let characters = "1234567890abcdef",
    randomColor = "";

  for (let i = 0; i < 6; i++) {
    randomColor =
      randomColor + characters[Math.floor(Math.random() * characters.length)];
  }

  color.innerText = "#" + randomColor;
  colorBox.style.backgroundColor = "#" + randomColor;
});

clip.addEventListener("click", () => {
  let bgColor = color.innerText;

  navigator.clipboard.writeText(bgColor);

  alert("Color " + bgColor + " copied to clipboard!");

  console.log(bgColor);
});
