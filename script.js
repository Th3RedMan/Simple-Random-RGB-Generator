const btn = document.querySelector("button")
const h1 = document.querySelector("h1")
const body = document.querySelector("body")


const randomRGB = () => {
    const randRGB = Math.floor(Math.random() * 256)
    console.log(randRGB)
    return randRGB
}


btn.addEventListener("click", () => {
    let randRGBOne = randomRGB()
    let randRGBTwo = randomRGB()
    let randRGBThree = randomRGB()
    h1.innerText = `RGB:${randRGBOne},${randRGBTwo},${randRGBThree}`;
    body.style.backgroundColor = `RGB(${randRGBOne},${randRGBTwo},${randRGBThree})`
})