
function myFunction() {

    var x = document.getElementById("myTopnav");
    var button = x.querySelector(".icon");

    if (x.className === "topnav") {

        x.className += " responsive";
        button.setAttribute("aria-expanded", "true");

    } else {

        x.className = "topnav";
        button.setAttribute("aria-expanded", "false");

    }
}
