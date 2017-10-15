// Slideshow-container
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.querySelectorAll(".slideshow .slides");
    var dots = document.querySelectorAll(".slideshow .dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active-dot";
    startSlides =setTimeout(showSlides, 4000);
};
// Form handler
document.querySelector(".register-form .submit").addEventListener("click", function(event){
    event.preventDefault()
    if(document.querySelector("#userFormName").value == ""){
        document.querySelector("#name .valid-icon").classList.add('invalid');
        document.querySelector("#userFormName").classList.add('invalid-field');
        document.querySelector("#age .valid-icon").classList.add('valid');
        document.querySelector("#city .valid-icon").classList.add('valid');
        document.querySelector("#name .error-txt").style.display = "block";
        return false;
    }
    else{
        document.querySelector(".register-form").submit();
    }
});
document.querySelector("#userFormName").onfocus= function() {
    document.querySelector("#name .valid-icon").classList.remove('invalid');
    document.querySelector("#userFormName").classList.remove('invalid-field');
    document.querySelector("#age .valid-icon").classList.remove('valid');
    document.querySelector("#city .valid-icon").classList.remove('valid');
    document.querySelector("#name .error-txt").style.display = "none";
}
// Users List block
// Carousel for images
var width = 80; 
var count = 5; 
var carousel = document.getElementById('carousel');
var list = carousel.querySelector('.carousel ul');
var listElems = carousel.querySelectorAll('.carousel li');
var position = 0;
carousel.querySelector('.carousel .prev').onclick = function() {
    position = Math.min(position + width * count, 0)
    list.style.marginLeft = position + 'px';
};
carousel.querySelector('.carousel .next').onclick = function() {
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};  
// Tab Function 
function openTab(event, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.querySelectorAll(".tabs .tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.querySelectorAll(".tabs .tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }
    document.getElementById(tabName).style.display = "inline-block";
    event.currentTarget.className += " active-tab";
}
document.getElementById("defaultOpen").click();
// Stars handler 
document.querySelector(".star-raiting").addEventListener("click", function(event){
    for (var i = 0; i < event.target.id; i++) {
        document.querySelectorAll(".star-raiting span")[i].classList.remove("star");
        document.querySelectorAll(".star-raiting span")[i].classList.add("star-checked");
    };    
    for (event.target.id; i < 5; i++) {
        document.querySelectorAll(".star-raiting span")[i].classList.add("star");
    }; 
});
// Slider 
jQuery("#slider").slider({
    min: 0,
    max: 1000,
    values: [300,666],
    range: true,
    stop: function(event, ui) {
        jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
        jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    },
    slide: function(event, ui){
        jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
        jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    }
});