import "./styles.css";

const body = document.getElementById("body");

let audio = new Audio("./assets/sounds/summer.mp3");
audio.load();
// let audiosWeWantToUnlock: [] = [];
// document.body.addEventListener(
//   "touchstart",
//   function () {
//     if (audiosWeWantToUnlock) {
//       for (let audio of audiosWeWantToUnlock) {
//         audio.play();
//         audio.pause();
//         audio.currentTime = 0;
//       }
//       audiosWeWantToUnlock = null;
//     }
//   },
//   false
// );
// //where earlier you did:

// audiosWeWantToUnlock.push(audio);

const changeAndPlayAudio = (link: string) => {
  audio.pause();
  audio.currentTime = 0;
  audio = new Audio(link);
  audio.play();
};

changeAndPlayAudio("./assets/sounds/summer.mp3");
body?.addEventListener("click", (e) => {
  const bodyCLasses = body?.classList;
  const target = (e.target as Element).id;
  if (
    (target === "summer-button" || target === "summer-image") &&
    !bodyCLasses?.contains("summer")
  ) {
    changeAndPlayAudio("./assets/sounds/summer.mp3");
    bodyCLasses?.remove("winter");
    bodyCLasses?.remove("rainy");
    bodyCLasses?.add("summer");
  } else if (
    (target === "rainy-button" || target === "rainy-image") &&
    !bodyCLasses?.contains("rainy")
  ) {
    changeAndPlayAudio("./assets/sounds/rain.mp3");
    bodyCLasses?.remove("winter");
    bodyCLasses?.remove("summer");
    bodyCLasses?.add("rainy");
  } else if (
    (target === "winter-button" || target === "winter-image") &&
    !bodyCLasses?.contains("winter")
  ) {
    changeAndPlayAudio("./assets/sounds/winter.mp3");
    bodyCLasses?.remove("summer");
    bodyCLasses?.remove("rainy");
    bodyCLasses?.add("winter");
  }
  e.stopPropagation();
});

// main?.classList.add(
//   "first"
// )
