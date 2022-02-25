const button = document.getElementById("btn");
const color = document.querySelector(".color")
const colors = ["yellow", "#222",
    "#800000", "#000080 ", "8B008B", "#FFD700"
];



button.addEventListener("click", () => {
    let hexColor = colors[getRandomNumber()]
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}