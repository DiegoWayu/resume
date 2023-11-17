let msg = "Hola Mudo"
console.log(msg)

document.addEventListener("DOMContentLoaded", init)
function init (event){
    let title = document.getElementById("title")
    title.style.color = "#be0687"
    title.innerHTML = msg
    loadData("data.json")
}
function loadData(url){
    let json
    fetch(url)
        .then(Response => json = Response.json())
        .then(data => {
            json = data
            console.log(json)
        })
}