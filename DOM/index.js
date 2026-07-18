// console.log(window)
// let isBlack = false;
// function ChangeBgColor() {
//     // console.log(e)
//     isBlack = !isBlack;
//     let color = isBlack ? "Black" : "white";
//     document.getElementsByTagName("body")[0].style.backgroundColor = color;
// }


// const button = document.getElementById("theme-button");
// button.addEventListener("click", ChangeBgColor)

let isDark = false;
const button = document.getElementById("theme-button");
button.addEventListener("click", (e) => {
    isDark = !isDark;
    let color = isDark ? "Black" : "white";
    if (isDark) button.innerText = "White Mode"
    else button.innerText = "Dark Mode"
    console.log(e)
    // document.body.style.color = "white";
    document.getElementsByTagName("body")[0].style.backgroundColor = color;
})