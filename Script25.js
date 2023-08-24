const myInput = document.getElementById("myInput");
const myDiv = document.getElementById("myDiv");

myInput.addEventListener("focus", () => {
  myDiv.style.display = "block";
});

myInput.addEventListener("blur", () => {
  myDiv.style.display = "none";
});