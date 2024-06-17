const totop=document.querySelector(".back-top");
addEventListener("scroll",()=>{
    if(pageYOffset> 75){
    totop.classList.add("active")
    }
    else{
        totop.classList.remove("active")
    }
})