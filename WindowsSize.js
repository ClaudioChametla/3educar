window.addEventListener("load", function (e) {
  let winSize = e.currentTarget.innerWidth;
  let image = document.getElementById("item-phone");
  if (winSize > 768) image.src = "./assets/mask.png";
  else if (winSize > 576) image.src = "./assets/human.png";
  else image.src = "./assets/dino.png";
});

addEventListener("resize", (e) => {
  let winSize = e.target.innerWidth;
  let image = document.getElementById("item-phone");
  if (winSize > 768) image.src = "./assets/mask.png";
  else if (winSize > 576) image.src = "./assets/human.png";
  else image.src = "./assets/dino.png";
});
