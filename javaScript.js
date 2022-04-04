let btn1=document.querySelector(".play-btn");
let btn2=document.querySelector(".pause-btn");

let video=document.querySelector(".video-container");

btn1.addEventListener("click", function()
{
  console.log("c1");
    video.play();
});

btn2.addEventListener("click", function()
{
    console.log("c2");
    video.pause();
});