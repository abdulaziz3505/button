const title = document.querySelector(".title")
const item = document.querySelectorAll(".item") // array
const coll = document.querySelector(".collection")

// querySelectorAll = doim array qaytaradi
// querySelector = doim bitta element qaytaradi


title.style.color = "#f00"

console.log(title);

console.log(item);

console.log(coll);

item[2].style.color = "red"

coll.style.border = "1px solid red"

function hideColl() {
    // add = class qo'shish
 coll.classList.add("hide")
   
}

function showColl() {
    // remove = classni olib tashlash
 coll.classList.remove("hide")
   
}























