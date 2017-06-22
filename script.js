// JavaScript source code
// Script to open and close sidebar
function open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// JavaScript source code

//var slideIndex = 1;
//showDivs(slideIndex);


//function plusDivs(n) {
//    showDivs(slideIndex += n);
//}

//function showDivs(n) {
//    var i;
//    var x = document.getElementsByClassName("mySlides");
//    if (n > x.length) {
//        slideIndex = 1;
//    }
//    if (n < 1) {
//        slideIndex = x.length;
//    }
//    for (i = 0; i < x.length; i++) {
//        x[i].style.display = "none";
//    }
//    x[slideIndex - 1].style.display = "block";
//}

var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 7000); // Change image every 7 seconds
}
