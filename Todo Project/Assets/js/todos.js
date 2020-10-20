//check off todos
//we can add listeners add only to elements that existed i.e ul
$("ul").on("click", "li" ,function(){
    $(this).toggleClass("completed");
  /*  if($(this).css("color")==="rgb(128, 128, 128)"){
        $(this).css({
            color:"black",
            textDecoration:"none"
    });
    }else{
        $(this).css({
            color:"gray",
            textDecoration:"line-through"
        });
    }*/
});

//click on X to delete
$("ul").on("click", "span" ,function(event){
   // $(this).remove();
    $(this).parent().fadeOut(500,function(){
       $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(e.which===13){
        var todo=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todo +"</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});