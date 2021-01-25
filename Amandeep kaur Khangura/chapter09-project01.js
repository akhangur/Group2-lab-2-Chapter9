
/* add code here  */
window.addEventListener("load",function(){
    var akelements= document.querySelectorAll(' .hilightable');
    for(i=0;i<akelements.length;i++){
      akelements[i].addEventListener("focus", toggle);
      akelements[i].addEventListener("blur", toggle);
    }
})
function toggle(g)
{
    if (g.type=="focus"){
    g.target.classList.add('highlight');}
    else if(g.type=="blur"){
    g.target.classList.remove('hilightable');}
}





