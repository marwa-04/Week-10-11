let image = document.querySelectorAll("img");

for(i=0; i<image.length; i++){
    if(image[i].hasAttribute("alt")){
        image[i].alt = "old";
    }
    else{
        image[i].alt = "Elzero New";
    }
}