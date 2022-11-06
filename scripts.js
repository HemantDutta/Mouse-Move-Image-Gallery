const gallery = document.getElementById("gallery"); //selecting the tag with id = gallery

window.onmousemove = e => {
    const mouseX = e.clientX; //saving the horizontal(x) coordinate of the mouse at any instance
    const mouseY = e.clientY; //same for Y coordinate

    const xDecimal = mouseX / window.innerWidth; //cursor x coordinate will be divided by the inner width of the browser viewport to generate a decimal value
    const yDecimal = mouseY / window.innerHeight; //same for y coordinate using inner height

    const maxX = gallery.offsetWidth - window.innerWidth; // cutting out window width from gallery width
    const maxY = gallery.offsetHeight - window.innerHeight; //same for height

    const panX = maxX * xDecimal * -1;
    const panY = maxY * yDecimal * -1;

    gallery.animate({
        transform: `translate(${panX}px, ${panY}px)`
    }, {
        duration: 4000,
        fill: "forwards",
        easing: "ease"
    })
    console.log("OffsetWidth: "+gallery.offsetWidth);
    console.log("OffsetHeight: "+gallery.offsetHeight);
    console.log("innerwidth: "+window.innerWidth);
    console.log("innerHeight: "+window.innerHeight);

}

//some notes:
// Gallery Height is 2688px and so is the width
//Window height is 937px and width is 1920px
// Basically the gallery is bigger than the screen and at any point, it is never completely inside the screen(obviously),
// think of it like a zoomed in image, we are moving our cursor on the screen, which is equivalent to moving our thumb on a touchscreen device
// to see different sections of the zoomed in picture