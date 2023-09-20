document.querySelector(".btn").onclick = function(){
    document.querySelector(".toggle").classList.toggle("open");
    document.querySelector(".fa-gear").classList.toggle("fa-spin");

}


document.querySelector(".white").onclick = function(){
    document.querySelector("body").classList.add("white")
    document.querySelector("body").classList.remove("black")
    document.querySelector("body").classList.remove("red")
    document.querySelector("body").classList.remove("orange")
    document.querySelector("body").classList.remove("yellow")
    document.querySelector("body").classList.remove("green")
    document.querySelector("body").classList.remove("purple")
    document.querySelector("body").classList.remove("brown")
    document.querySelector("body").style.backgroundColor = window.localStorage.setItem("color", "white")
    if(document.querySelector("body").style.backgroundColor = "white"){
        document.querySelector(".white").classList.add("active")
        document.querySelector(".green").classList.remove("active")
        document.querySelector(".purple").classList.remove("active")
        document.querySelector(".orange").classList.remove("active")
        document.querySelector(".red").classList.remove("active")
        document.querySelector(".yellow").classList.remove("active")
        document.querySelector(".black").classList.remove("active")
        document.querySelector(".brown").classList.remove("active")
    }
}

document.querySelector(".black").onclick = function(){
    document.querySelector("body").classList.add("black")
    document.querySelector("body").classList.remove("white")
    document.querySelector("body").classList.remove("red")
    document.querySelector("body").classList.remove("orange")
    document.querySelector("body").classList.remove("yellow")
    document.querySelector("body").classList.remove("green")
    document.querySelector("body").classList.remove("purple")
    document.querySelector("body").classList.remove("brown")
    document.querySelector("body").style.backgroundColor = window.localStorage.setItem("color", "black")
    if(document.querySelector("body").style.backgroundColor = "black"){
        document.querySelector(".black").classList.add("active")
        document.querySelector(".green").classList.remove("active")
        document.querySelector(".purple").classList.remove("active")
        document.querySelector(".orange").classList.remove("active")
        document.querySelector(".red").classList.remove("active")
        document.querySelector(".yellow").classList.remove("active")
        document.querySelector(".white").classList.remove("active")
        document.querySelector(".brown").classList.remove("active")
    }
}
document.querySelector(".red").onclick = function(){
    document.querySelector("body").classList.remove("black")
    document.querySelector("body").classList.remove("white")
    document.querySelector("body").classList.add("red")
    document.querySelector("body").classList.remove("orange")
    document.querySelector("body").classList.remove("yellow")
    document.querySelector("body").classList.remove("green")
    document.querySelector("body").classList.remove("purple")
    document.querySelector("body").classList.remove("brown")
    document.querySelector("body").style.backgroundColor = window.localStorage.setItem("color", "rgb(216, 75, 75)")
    if(document.querySelector("body").style.backgroundColor = "rgb(216, 75, 75)"){
        document.querySelector(".red").classList.add("active")
        document.querySelector(".green").classList.remove("active")
        document.querySelector(".purple").classList.remove("active")
        document.querySelector(".orange").classList.remove("active")
        document.querySelector(".yellow").classList.remove("active")
        document.querySelector(".black").classList.remove("active")
        document.querySelector(".white").classList.remove("active")
        document.querySelector(".brown").classList.remove("active")
    }
}
document.querySelector(".orange").onclick = function(){
    document.querySelector("body").classList.remove("black")
    document.querySelector("body").classList.remove("white")
    document.querySelector("body").classList.remove("red")
    document.querySelector("body").classList.add("orange")
    document.querySelector("body").classList.remove("yellow")
    document.querySelector("body").classList.remove("green")
    document.querySelector("body").classList.remove("purple")
    document.querySelector("body").classList.remove("brown")
    document.querySelector("body").style.backgroundColor = window.localStorage.setItem("color", "rgb(227, 125, 8)")
    if(document.querySelector("body").style.backgroundColor = "rgb(227, 125, 8)"){
        document.querySelector(".orange").classList.add("active")
        document.querySelector(".green").classList.remove("active")
        document.querySelector(".purple").classList.remove("active")
        document.querySelector(".yellow").classList.remove("active")
        document.querySelector(".red").classList.remove("active")
        document.querySelector(".black").classList.remove("active")
        document.querySelector(".white").classList.remove("active")
        document.querySelector(".brown").classList.remove("active")
    }
}

document.querySelector(".yellow").onclick = function(){
    document.querySelector("body").classList.remove("black")
    document.querySelector("body").classList.remove("white")
    document.querySelector("body").classList.remove("red")
    document.querySelector("body").classList.remove("orange")
    document.querySelector("body").classList.add("yellow")
    document.querySelector("body").classList.remove("green")
    document.querySelector("body").classList.remove("purple")
    document.querySelector("body").classList.remove("brown")
    document.querySelector("body").style.backgroundColor = window.localStorage.setItem("color", "rgb(230, 230, 65)")
    if(document.querySelector("body").style.backgroundColor = "rgb(230, 230, 65)"){
        document.querySelector(".yellow").classList.add("active")
        document.querySelector(".green").classList.remove("active")
        document.querySelector(".purple").classList.remove("active")
        document.querySelector(".orange").classList.remove("active")
        document.querySelector(".red").classList.remove("active")
        document.querySelector(".black").classList.remove("active")
        document.querySelector(".white").classList.remove("active")
        document.querySelector(".brown").classList.remove("active")
    }
}

document.querySelector(".green").onclick = function(){
    document.querySelector("body").classList.remove("black")
    document.querySelector("body").classList.remove("white")
    document.querySelector("body").classList.remove("red")
    document.querySelector("body").classList.remove("orange")
    document.querySelector("body").classList.remove("yellow")
    document.querySelector("body").classList.add("green")
    document.querySelector("body").classList.remove("purple")
    document.querySelector("body").classList.remove("brown")
    document.querySelector("body").style.backgroundColor = window.localStorage.setItem("color", "rgba(96, 198, 98, 0.941)")
    if(document.querySelector("body").style.backgroundColor = "rgba(96, 198, 98, 0.941)"){
        document.querySelector(".green").classList.add("active")
        document.querySelector(".purple").classList.remove("active")
        document.querySelector(".yellow").classList.remove("active")
        document.querySelector(".orange").classList.remove("active")
        document.querySelector(".red").classList.remove("active")
        document.querySelector(".black").classList.remove("active")
        document.querySelector(".white").classList.remove("active")
        document.querySelector(".brown").classList.remove("active")
    }
}

document.querySelector(".purple").onclick = function(){
    document.querySelector("body").classList.remove("black")
    document.querySelector("body").classList.remove("white")
    document.querySelector("body").classList.remove("red")
    document.querySelector("body").classList.remove("orange")
    document.querySelector("body").classList.remove("yellow")
    document.querySelector("body").classList.remove("green")
    document.querySelector("body").classList.add("purple")
    document.querySelector("body").classList.remove("brown")
    document.querySelector("body").style.backgroundColor = window.localStorage.setItem("color", "rgb(188, 63, 188)")
    if(document.querySelector("body").style.backgroundColor = "rgb(188, 63, 188)"){
        document.querySelector(".purple").classList.add("active")
        document.querySelector(".green").classList.remove("active")
        document.querySelector(".yellow").classList.remove("active")
        document.querySelector(".orange").classList.remove("active")
        document.querySelector(".red").classList.remove("active")
        document.querySelector(".black").classList.remove("active")
        document.querySelector(".white").classList.remove("active")
        document.querySelector(".brown").classList.remove("active")
    }
}

document.querySelector(".brown").onclick = function(){
    document.querySelector("body").classList.remove("black")
    document.querySelector("body").classList.remove("white")
    document.querySelector("body").classList.remove("red")
    document.querySelector("body").classList.remove("orange")
    document.querySelector("body").classList.remove("yellow")
    document.querySelector("body").classList.remove("green")
    document.querySelector("body").classList.remove("purple")
    document.querySelector("body").classList.add("brown")
    document.querySelector("body").style.backgroundColor = window.localStorage.setItem("color" , "rgb(130, 63, 63)  ")
    if(document.querySelector("body").style.backgroundColor = "var(---change-color)"){
        document.querySelector(".brown").classList.add("active")
        document.querySelector(".purple").classList.remove("active")
        document.querySelector(".green").classList.remove("active")
        document.querySelector(".yellow").classList.remove("active")
        document.querySelector(".orange").classList.remove("active")
        document.querySelector(".red").classList.remove("active")
        document.querySelector(".black").classList.remove("active")
        document.querySelector(".white").classList.remove("active")
    }
}

if(window.localStorage.getItem("color")){
    document.querySelector("body").style.backgroundColor = window.localStorage.getItem("color")
}








const gethour = document.querySelector(".hour")
const getmints = document.querySelector(".mints")
const getsecond = document.querySelector(".second")



setInterval(() => {
    let date = new Date()
    let hour = date.getHours() / 12 * 360
    let minits = date.getMinutes() / 60 * 360
    let second = date.getSeconds() / 60 * 360
    getsecond.style.transform = `rotate(${second}deg)`
    getmints.style.transform = `rotate(${minits}deg)`
    gethour.style.transform = `rotate(${hour}deg)`

}, 1000);








