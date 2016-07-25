var myImage = document.getElementById("fah");
var imageArray = ["images/fahlake.jpg", "images/fahsnow.jpg", "images/fahfall.jpg"];
var imageIndex = 0 
function changeImage () {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>=imageArray.length) {
        imageIndex = 0;
    }
}
var intervalHandle = setInterval(changeImage,3000)