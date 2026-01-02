// Accordion toggle
document.querySelectorAll(".header").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("active");
  });
});

// Add Twitch channel inputs
const addBtn = document.getElementById("addTwitch");
const list = document.getElementById("twitchList");

if (addBtn && list) {
  addBtn.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter Twitch name (one per box)";
    list.appendChild(input);
    input.focus();
  });
}
