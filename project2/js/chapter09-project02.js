/* add code here */
//Step 2
window.addEventListener("load", function()          //Load event
{
    var clickImg= document.querySelectorAll("#thumbnails img");
    for(i=0;i<clickImg.length;i++)
    {
        //Step 3
        clickImg[i].addEventListener("click",function(event)                    //click event
        {
            var filepath = event.target.src;    
            var filename = filepath.split("images/small");                      // split till images/small and extract the filename only  
            document.querySelector("#featured img").src = "images/medium"+filename[1];
            document.querySelector("#featured img").title = event.target.title; 
            document.querySelector("#featured img").alt = event.target.alt;
            var caption = document.querySelector("#featured figcaption");
            caption.innerHTML = event.target.title;
        })
    }

    //Step 4
    var HoverImg = document.querySelector("#featured img");
    HoverImg.addEventListener("mouseover",function(event)                    //mouseover event
        {
            var caption = document.querySelector("#featured figcaption");
            caption.style.opacity = "80%";
        })

    var ImgOut= document.querySelector("#featured img");
    HoverImg.addEventListener("mouseout",function(event)                    //mouseout event
        {
            var caption = document.querySelector("#featured figcaption");
            caption.style.opacity = "0%";
        })
    
})
