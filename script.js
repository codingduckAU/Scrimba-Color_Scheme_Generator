const menu = document.getElementById("style-menu")         //.value as attribute
const button = document.getElementById("magic-button")
// COLOR PICKER: cannot declare as it changes upon user input, declared in functions below.
const color1 = document.getElementById("col1")
const color2 = document.getElementById("col2")
const color3 = document.getElementById("col3")
const color4 = document.getElementById("col4")
const color5 = document.getElementById("col5")
const text1 = document.querySelector(".text1")
const text2 = document.querySelector(".text2")
const text3 = document.querySelector(".text3")
const text4 = document.querySelector(".text4")
const text5 = document.querySelector(".text5")

// ---------------------- FETCH API + COLOR ASSIGN -------------------------

button.addEventListener("click", function() {
    let colorP = document.querySelector(".color-picker").value.substring(1)
    let url = `https://www.thecolorapi.com/scheme?hex=${colorP}&mode=${menu.value}&count=5`
    console.log(url)
    fetch(url)
            .then(result => result.json())
            .then(resultJ => {
                console.log(resultJ)
                color1.style.backgroundColor = resultJ.colors[0].hex.value
                color2.style.backgroundColor = resultJ.colors[1].hex.value
                color3.style.backgroundColor = resultJ.colors[2].hex.value
                color4.style.backgroundColor = resultJ.colors[3].hex.value
                color5.style.backgroundColor = resultJ.colors[4].hex.value
                text1.innerHTML = resultJ.colors[0].hex.value
                text2.innerHTML = resultJ.colors[1].hex.value
                text3.innerHTML = resultJ.colors[2].hex.value
                text4.innerHTML = resultJ.colors[3].hex.value
                text5.innerHTML = resultJ.colors[4].hex.value
                            })
})






// ------------ COPY TEXT TO CLIPBOARD ---------------

const footer = document.querySelector("footer")     // Targets entire footer area
let area = ""

footer.addEventListener("click", (e) => {
    area = e.target.innerHTML                      // Extracts exactly what div was clicked inside footer, from event
    navigator.clipboard.writeText(area)            // Code & function to copy text to clipboard
    popUp()
})

function popUp() {                                  // Runs the "Copies to Clipboard" arch text animation
    // Animate classes
    document.querySelector(".animate").classList.add("special-code-animate")
    document.querySelector("h4").classList.add("special-code-h4")
    setTimeout( () => {                             // Removes above after 1second
        document.querySelector(".animate").classList.remove("special-code-animate")
        document.querySelector("h4").classList.remove("special-code-h4")
    }, 1000)
}



// --------------- DISPLAY SCREEN PIXELS -------------------

// const screenPixels = document.getElementById("screen-pixels")
// screenPixels.innerHTML = "Your screen resolution is: " + window.screen.width + "x" + window.screen.height + ". Ratio: " + window.devicePixelRatio