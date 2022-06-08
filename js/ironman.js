var openpopupbtn = document.querySelector("#open-popup-btn");

var closepopupbtn = document.querySelector(".popup-close-btn");

openpopupbtn.addEventListener("click",function(){
  document.body.classList.add("popup-active");
});

closepopupbtn.addEventListener("click",function(){
    document.body.classList.remove("popup-active");
});


var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");

btn[0].onclick=function(){
    slide.style.transform = "translateX(0px)";
    for(i=0;i<4;i++)
    {
     btn[i].classList.remove("active");   
    }
    this.classList.add("active");
}
btn[1].onclick=function(){
    slide.style.transform = "translateX(-800px)";
    for(i=0;i<4;i++)
    {
     btn[i].classList.remove("active");   
    }
    this.classList.add("active");
}
btn[2].onclick=function(){
    slide.style.transform = "translateX(-1600px)";
    for(i=0;i<4;i++)
    {
     btn[i].classList.remove("active");   
    }
    this.classList.add("active");
}
btn[3].onclick=function(){
    slide.style.transform = "translateX(-2400px)";
    for(i=0;i<4;i++)
    {
     btn[i].classList.remove("active");   
    }
    this.classList.add("active");
}