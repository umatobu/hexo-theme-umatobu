var my_tab_li_click = function(v) {
    var llis = document.getElementsByClassName("tab-div-menu-li");
    for(var i = 0; i < llis.length; i++) {
      var lli = llis[i];
      if(lli == document.getElementById("tab" + v + "-li")) {
        lli.style.backgroundColor = "#6AA593";
      } else {
        lli.style.backgroundColor = "#8CC7B5";
      }
    }
    var divs = document.getElementsByClassName("archive");
    for(var i = 0; i < divs.length; i++) {
      var divv = divs[i];
      if(divv == document.getElementById("tab" + v + "-div")) {
        divv.style.display = "block";
      } else {
        divv.style.display = "none";
      }
    }
}