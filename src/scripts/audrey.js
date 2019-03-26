const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener("scroll", function () {
    console.log("running");
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
    let scroll = window.scrollY;
    let scrollwidth = scroll * (1/3);
    let scrollheight = scroll * (1/4);
    if (scrollwidth < 50){
        scrollwidth = 50;
    };
    if (scrollheight < 100){
        scrollheight = 100
    };
    scrollheight += "px";
    scrollwidth += "px";

    audrey.style.width = scrollwidth;



    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
   audrey.style.height = scrollheight;
})