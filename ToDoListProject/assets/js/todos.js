// Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// IMPORTANT!!! $("ul").on("click", "span"...
// Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation(); 
});

$("input[type='text']").keypress(function(event){
	//if Enter is pressed
	if(event.which === 13){
		//grab new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		 $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});