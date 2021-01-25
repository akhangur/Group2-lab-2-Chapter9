
/* add code here  */
window.addEventListener("load",function(){
var hielememts= document.querySelectorAll('.hilightable');
for(i=0;i<hielememts.length;i++){
    hielememts[i].addEventListener("focus", toggle);
    hielememts[i].addEventListener("blur", toggle);
}
var mForm=document.getElementById("mainForm");
mForm.addEventListener("submit", submitFunction);

function submitFunction(e) {
    var req= document.querySelectorAll('.required');
    for(i=0;i<req.length;i++){
        if (req[i].value == "") {
           req[i].classList.add('error');
            e.preventDefault();
        }
        else{
            req[i].classList.remove('error');
        }
    }
}

});
function toggle(e)
{
    if (e.type == "focus") {
    e.target.classList.add('highlight');}
    else if(e.type=="blur"){
    e.target.classList.remove('highlight');}
}




