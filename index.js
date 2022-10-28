console.log("JS");

const main = document.querySelector(".main")
function createCircle() {
    let aylana = document.createElement("div")
    aylana.classList.add("circle")
    main.appendChild(aylana)
}



setInterval(()=>{createCircle()}, 300)












