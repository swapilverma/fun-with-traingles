const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputResult = document.querySelector("#output");

function calculateArea(){
    const base = Number(sides[0].value)
    const height = Number(sides[1].value)
    const area = 0.5*base*height
    
    outputResult.innerText = "The Area is "+ area + " cm^2"
}

areaBtn.addEventListener("click", calculateArea);