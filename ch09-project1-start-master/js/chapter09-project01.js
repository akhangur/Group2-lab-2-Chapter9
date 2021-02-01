/* add code here  */

window.addEventListener('load', function(){
    //Step 2
    var hilightableInputs = document.querySelectorAll(".hilightable");
    for(i=0; i < hilightableInputs.length; i++) {
      var toggle = (event) => { event.target.classList.toggle('highlight') } 
      hilightableInputs[i].addEventListener('focus', toggle)
      hilightableInputs[i].addEventListener('blur', toggle)
    }
  
   //Step 3  
    var form=document.getElementById("mainForm");
    form.addEventListener("submit", submissionCheck);
    function submissionCheck(event){
      var requiredInputs = document.querySelectorAll(".required");
      for(i=0; i < requiredInputs.length; i++){
        if(requiredInputs[i].value == "")
        {
            event.preventDefault();
            requiredInputs[i].classList.add("error");
        }
        else {
          requiredInputs[i].classList.remove("error");
        }
  
      }
    }
    form.addEventListener("reset", resetForm)
  //step 4
    function resetForm(event){
      var requiredInputs = document.querySelectorAll(".required");
      for(i=0; i < requiredInputs.length; i++){
        requiredInputs[i].classList.remove("error");
      }
    }
  
  })
// /* add code here  */
// window.addEventListener("load",function(){
// var hielememts= document.querySelectorAll('.hilightable');
// for(i=0;i<hielememts.length;i++){
//     hielememts[i].addEventListener("focus", toggle);
//     hielememts[i].addEventListener("blur", toggle);
// }
// var mForm=document.getElementById("mainForm");
// mForm.addEventListener("submit", submitFunction);

// function submitFunction(e) {
//     var req= document.querySelectorAll('.required');
//     for(i=0;i<req.length;i++){
//         if (req[i].value == "") {
//            req[i].classList.add('error');
//             e.preventDefault();
//         }
//         else{
//             req[i].classList.remove('error');
//         }
//     }
// }

// });
// function toggle(e)
// {
//     if (e.type == "focus") {
//     e.target.classList.add('highlight');}
//     else if(e.type=="blur"){
//     e.target.classList.remove('highlight');}
// }




