function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// var toggle = true;
// function openSubMenu(id){
// 	var x=document.getElementById(id);
// 	if(toggle){
// 		x.style.display='block';
// 		toggle = false;
// 	}else{
// 		x.style.display='none';
// 		toggle = true;
// 	}
// }

  $(document).ready(function(){
    $(".openSubMenu").click(function(){
          $(this).siblings("ul").toggle();
    });
  });