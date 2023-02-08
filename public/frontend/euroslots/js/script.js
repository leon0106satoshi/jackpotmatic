// Slider(all Slides in a container)
const slider = document.querySelector(".slider")
// All trails 
const trail = document.querySelector(".trail").querySelectorAll("div")

// trail index number
let trailValue = 0
let offset = 0

// Function to slide forward
const slide = (condition) => {
    // document.getElementById('content').innerHTML = "yes, clicked";
    // console.log('clickeeeeed')
    // update value and trailValue
    condition === "increase" ? trailValue++ : trailValue--
    if (trail.length == trailValue) {
        trailValue = 0
    } else if (trailValue < 0) {
        trailValue = trail.length - 1
    }
    // move slide
    move(trailValue)
}
// function to transform slide 
const move = (T) => {
    trailValue = T
    // trail.forEach(cur => cur.classList.remove("active"))
    for(let i = 0; i<trail.length; i++){
        trail[i].classList.remove('active');
    }
    // transform slider
    slider.style.transform = `translateX(-${100 * T}vw)`
    if (document.querySelector('.trail').parentNode.offsetWidth < document.querySelector('.trail').offsetLeft) {
        let position = trail[T].offsetLeft - document.querySelector('.trail').offsetLeft
        if (position < document.querySelector('.trail').parentNode.offsetWidth / 2) {
            position = 0
        } else {
            position = position - document.querySelector('.trail').parentNode.offsetWidth / 2
        }
        document.querySelector('.trail').style.marginLeft = `-${position}px`
    }
    //add active class to the current trail
    trail[T].classList.add("active")
}


// Next  and  Previous button function (SVG icon with different classes)
// document.querySelectorAll("#content .arrow-button").forEach(cur => {
//     cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"))
// })
function arrowIncrease() {
    slide("increase");
}
function arrowDecrease() {
    slide("decrease");
}

// $("#content .arrow-button").click(function(){
//     $("#content").html("clicked...")
// })

// document.querySelectorAll("header svg").forEach(cur => {
//     cur.addEventListener("click", () => {
//         if (cur.classList.contains("nav-left")) {
//             offset--
//         } else {
//             offset++
//         }

//         if (offset * 200 + document.getElementById('cat-menu').parentNode.offsetWidth > document.getElementById('cat-menu').offsetWidth) {
//             document.querySelector('header svg.nav-left').style.visibility = 'visible'
//             document.querySelector('header svg.nav-right').style.visibility = 'hidden'
//         } else if (offset < 0) {
//             document.querySelector('header svg.nav-left').style.visibility = 'hidden'
//             document.querySelector('header svg.nav-right').style.visibility = 'visible'
//         } else {
//             document.querySelector('header svg.nav-left').style.visibility = 'visible'
//             document.querySelector('header svg.nav-right').style.visibility = 'visible'
//         }

//         document.getElementById('cat-menu').style.transform = `translateX(-${offset * 200}px)`
//     })
// })
function navLeft() {
    offset--;
    navChange();
}
function navRight() {
    offset++;
    navChange();
}
function navChange() {
    if (offset * 200 + document.getElementById('cat-menu').parentNode.offsetWidth > document.getElementById('cat-menu').offsetWidth) {
        document.querySelector('header svg.nav-left').style.visibility = 'visible'
        document.querySelector('header svg.nav-right').style.visibility = 'hidden'
    } else if (offset < 0) {
        document.querySelector('header svg.nav-left').style.visibility = 'hidden'
        document.querySelector('header svg.nav-right').style.visibility = 'visible'
    } else {
        document.querySelector('header svg.nav-left').style.visibility = 'visible'
        document.querySelector('header svg.nav-right').style.visibility = 'visible'
    }
    document.getElementById('cat-menu').style.transform = `translateX(-${offset * 200}px)`
}

// function to slide when trail is clicked
const clickCheck = (e) => {
    // Get selected trail
    const check = e.target
    // move slide
    move(check.textContent - 1)
}

// Add function to all trails
// trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))

// Mobile touch Slide Section
const touchSlide = (() => {
    let start, move, change, sliderWidth

    // Do this on initial touch on screen
    slider.addEventListener("touchstart", (e) => {
        // get the touche position of X on the screen
        start = e.touches[0].clientX
        // (each slide with) the width of the slider container divided by the number of slides
        sliderWidth = slider.clientWidth / trail.length
    })

    // Do this on touchDrag on screen
    slider.addEventListener("touchmove", (e) => {
        // prevent default function
        e.preventDefault()
        // get the touche position of X on the screen when dragging stops
        move = e.touches[0].clientX
        // Subtract initial position from end position and save to change variabla
        change = start - move
    })

    const mobile = (e) => {
        // if change is greater than a quarter of sliderWidth, next else Do NOTHING
        change > (sliderWidth / 4) ? slide("increase") : null;
        // if change * -1 is greater than a quarter of sliderWidth, prev else Do NOTHING
        (change * -1) > (sliderWidth / 4) ? slide("decrease") : null;
        // reset all variable to 0
        [start, move, change, sliderWidth] = [0, 0, 0, 0]
    }
    // call mobile on touch end
    slider.addEventListener("touchend", mobile)
})()

function clock() 
{
   var digital = new Date();
   var hours = digital.getHours();
   var minutes = digital.getMinutes();
   var seconds = digital.getSeconds();
   if (minutes <= 9) minutes = "0" + minutes;
   if (seconds <= 9) seconds = "0" + seconds;
   dispTime = hours + ":" + minutes + ":" + seconds;

   var basicclock = document.getElementById('basicclock');
   basicclock.innerHTML = dispTime;
   setTimeout("clock()", 1000);
}
clock();