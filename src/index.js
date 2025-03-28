
let toggleMenu = document.getElementById("toggle-menu")
let toggleButton = document.getElementById("toggle-button")


toggleButton.addEventListener("click" ,(event)=>{
    toggleMenu.classList.toggle("hidden")
    event.stopPropagation();
})

document.addEventListener("click", (event) => {
    if (!toggleMenu.contains(event.target) && !toggleButton.contains(event.target)) {
        toggleMenu.classList.add("hidden");
    }
});