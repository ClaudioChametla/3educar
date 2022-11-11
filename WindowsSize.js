window.addEventListener("load", function (e) {
  let winSize = e.currentTarget.innerWidth;
  let image = document.getElementById("item-phone");
  if (winSize > 820) image.src = "./assets/mask.png";
  else if (winSize > 576) image.src = "./assets/human.png";
  else image.src = "./assets/dino.png";
});

addEventListener("resize", (e) => {
  let winSize = e.target.innerWidth;
  let image = document.getElementById("item-phone");
  if (winSize > 820) image.src = "./assets/mask.png";
  else if (winSize > 576) image.src = "./assets/human.png";
  else image.src = "./assets/dino.png";
});

function playStoreRedirect() {
  window.location.href = "https://play.google.com/store/games?hl=es_MX";
}
function appStoreRedirect() {
  window.location.href = "https://apps.apple.com/mx/app/3ducar/id6444195289";
}
