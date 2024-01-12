import "./styles.css";

// console.log(styles);
const body = document.getElementById("body");

// console.log(body);

body?.addEventListener("click", (e) => {
  const classesOfBody = body?.classList;
  const target = (e.target as Element).id;
  console.log(classesOfBody, '----------')
  console.log(target, '----------')
  if (
    (target === "summer-button" || "summer-image") &&
    !classesOfBody?.contains("summer")
  ) {
    // classesOfBody?.contains("summer");
    classesOfBody?.remove("winter");
    classesOfBody?.remove("rainy");
    classesOfBody?.add("summer");
  } else if (
    (target === "rainy-button" || "rainy-image") &&
    !classesOfBody?.contains("rainy")
  ) {
    // classesOfBody?.contains("summer");
    classesOfBody?.remove("winter");
    classesOfBody?.remove("summer");
    classesOfBody?.add("rainy");
  } else if (
    (target === "winter-button" || "winter-image") &&
    !classesOfBody?.contains("winter")
  ) {
    // classesOfBody?.contains("summer");
    classesOfBody?.remove("summer");
    classesOfBody?.remove("rainy");
    classesOfBody?.add("winter");
  }
  e.stopPropagation();
});

// main?.classList.add(
//   "first"
// )
