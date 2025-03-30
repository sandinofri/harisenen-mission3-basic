
let toggleMenu = document.getElementById("toggle-menu")
let toggleButton = document.getElementById("toggle-button")
let genreButton = document.getElementById("genre-button")
let genreList = document.getElementById("genre-list")
let genreIcon = document.getElementById("genre-icon")
let helpIcon = document.getElementById("help-icon")
let helpButton = document.getElementById("help-button")
let help = document.getElementById("help")

toggleButton.addEventListener("click" ,(event)=>{
    toggleMenu.classList.toggle("hidden")
    event.stopPropagation();
})

document.addEventListener("click", (event) => {
    if (!toggleMenu.contains(event.target) && !toggleButton.contains(event.target)) {
        toggleMenu.classList.add("hidden");
    }
});

genreButton.addEventListener("click",()=>{
    genreList.classList.toggle("hidden")
    genreIcon.classList.toggle("rotate-90")
})

helpButton.addEventListener("click",()=>{
    help.classList.toggle("hidden")
    helpIcon.classList.toggle("rotate-90")
})