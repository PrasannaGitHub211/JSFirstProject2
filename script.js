const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");


// console.log(window.getComputedStyle(red).backgroundColor);


const getBackGroundColor = (selectedElement)=>{
    return window.getComputedStyle(selectedElement).backgroundColor;

}

console.log(getBackGroundColor(violet));
//------------------------------------------------------------------------------------------------------------------------

var color = getBackGroundColor(pink);

// pink.addEventListener("mouseleave", () => {
//     center.style.background  = color; // Use backgroundColor instead of background
// });

// dry code of above 23 too 25 line
const magicColorChanger = ((color,element) => {
    return element.addEventListener("mouseover", () => {
        center.style.background  = color; // Use backgroundColor instead of background
    });
    
})


//caling above dry code magicColorChanger
magicColorChanger(getBackGroundColor(red),red);
magicColorChanger(getBackGroundColor(cyan),cyan);
magicColorChanger(getBackGroundColor(violet),violet);
magicColorChanger(getBackGroundColor(orange),orange);
magicColorChanger(getBackGroundColor(pink),pink);