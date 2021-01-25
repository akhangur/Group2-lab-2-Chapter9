/* add code here  */
window.addEventListener("load",function(){
var hielememts= document.querySelectorAll('.hilightable');
for(i=0;i<hielememts.length;i++){
    hielememts[i].addEventListener("focus", toggle);
    hielememts[i].addEventListener("blur", toggle);
}
})
function toggle(e)
{
    e.classList.remove('highlight');
    e.classList.add('hilightable');
}