function menu(){
    var x=document.getElementById("lang-menu");
    if(x.style.display==="none"){
          x.style.display="flex";
    }else{
        x.style.display="none";
    }
}

function menuClose(){
    var  x = document.getElementById("lang-menu");
    if(x.style.display="flex"){
        x.style.display="none";
    }
}