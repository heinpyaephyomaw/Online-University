
$(".navbar-toggler").on("click",function(){
  let hasShow = $(".navbar-collapse").hasClass("show");

  if(hasShow){
      $(".menu-icon").removeClass('feather-x');
      $(".menu-icon").addClass('feather-menu');
  }else{
      $(".menu-icon").removeClass('feather-menu');
      $(".menu-icon").addClass('feather-x');
  }

})