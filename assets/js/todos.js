// check off to do when clicked
$("ul").on("click","li", function(){
  $(this).toggleClass("completed");
});

$("ul").sortable({
    stop: function(event, ui) {
      $(this).appendTo(this);
    }
});

//click x to delete to do
$("ul").on("click","span", function(evt){
  $(this).parent().fadeOut(500, function(){
    $(this).remove()
  });
  evt.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if (event.which === 13) {
    //grab new to do text from input
    var toDoText = $(this).val();
    $(this).val("");
    $("ul").append(`<li><span><i class="fas fa-trash-alt"></i></span> ${toDoText} </li>`);
  }
})

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
