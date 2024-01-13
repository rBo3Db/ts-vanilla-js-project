import "./styles.css";

const body = document.getElementById("body");

let audio = new Audio("./assets/sounds/summer.mp3");

let previosClick = "";
let volume = 0.5;

const changeAndPlayAudio = (link: string) => {
  audio.pause();
  audio.currentTime = 0;
  audio = new Audio(link);
  audio.play();
};

body?.addEventListener("click", (e) => {
  const bodyCLasses = body?.classList;
  const target = (e.target as Element).id;
  if (target === "summer-button" || target === "summer-image") {
    if (previosClick === "summer") {
      audio.pause();
      previosClick = "";
    } else {
      previosClick = "summer";
      changeAndPlayAudio("./assets/sounds/summer.mp3");
      bodyCLasses?.remove("winter");
      bodyCLasses?.remove("rainy");
      bodyCLasses?.add("summer");
    }
  } else if (target === "rainy-button" || target === "rainy-image") {
    if (previosClick === "rainy") {
      audio.pause();
      previosClick = "";
    } else {
      previosClick = "rainy";
      changeAndPlayAudio("./assets/sounds/rain.mp3");
      bodyCLasses?.remove("winter");
      bodyCLasses?.remove("summer");
      bodyCLasses?.add("rainy");
    }
  } else if (target === "winter-button" || target === "winter-image") {
    if (previosClick === "winter") {
      audio.pause();
      previosClick = "";
    } else {
      previosClick = "winter";
      changeAndPlayAudio("./assets/sounds/winter.mp3");
      bodyCLasses?.remove("summer");
      bodyCLasses?.remove("rainy");
      bodyCLasses?.add("winter");
    }
  }
  audio.volume = volume;
  e.stopPropagation();
});

document.getElementById("range")?.addEventListener("change", (e) => {
  volume = Number((e.target as HTMLInputElement).value) / 100;
});
// main?.classList.add(
//   "first"
// )
