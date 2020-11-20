function changeBorder(idname){
    var obj = document.getElementById(idname);
    if(obj.style.borderWidth == "3px"){
      obj.style.borderWidth = "0px";
    }else{
      obj.style.border = "3px solid blue";
    }
  }