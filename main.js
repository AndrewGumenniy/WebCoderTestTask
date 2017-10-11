// slideshow-container
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  startSlides =setTimeout(showSlides, 4000);
};
// Form handler
document.querySelector(".submit").addEventListener("click", function(event){
    event.preventDefault()
    if(document.querySelector("#UserForm_name").value == ""){
        document.querySelector("#name .valid_icon").classList.add('invalid');
        document.querySelector("#UserForm_name").style.borderColor = "red";
        document.querySelector("#age .valid_icon").classList.add('valid');
        document.querySelector("#city .valid_icon").classList.add('valid');
        document.querySelector("#name .error_txt").style.display = "block";
        return false;
    }
    else{
        document.querySelector(".register-form").submit();
    }
});
document.querySelector("#UserForm_name").onfocus= function() {
    document.querySelector("#name .valid_icon").classList.remove('invalid');
    document.querySelector("#UserForm_name").style.borderColor = "#dcdada";
    document.querySelector("#age .valid_icon").classList.remove('valid');
    document.querySelector("#city .valid_icon").classList.remove('valid');
    document.querySelector("#name .error_txt").style.display = "none";
}
// Carousel handler 
var width = 80; 
var count = 5; 
var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');
var position = 0;
carousel.querySelector('.prev').onclick = function() {
    position = Math.min(position + width * count, 0)
    list.style.marginLeft = position + 'px';
};
carousel.querySelector('.next').onclick = function() {
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};  
// Tab Function 
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }
    document.getElementById(tabName).style.display = "inline-block";
    evt.currentTarget.className += " active-tab";
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