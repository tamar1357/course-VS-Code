const getUser = async () => {
  try {
    const res = await fetch("https://vk.com");
    const data = await res.json();
  } catch (e) {
    console.log(e);
  }
};
getUser();
document.addEventListener("click", (event) => {
  event.preventDefault();
});

document.querySelector("h1").style.color = "darkred";
console.log();
console.log("");
const el = document.querySelector("#el");
