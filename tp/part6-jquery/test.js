$(document).ready(function(){
   // alert("le document est prêt");

   $('ul li:first-child').hover(
       function() {

        $(this).css("background-color", "blue");
   });
// faire un toggle ou un hover avec 2 fonctions addClass et removeClass


    $('ul li:eq(1)').hover(function() {

       $("li:eq(2)").css("background-color", "red");

       // autre manière de l'écrire
       // $(this).next().css("background-color", "red");

    });


    $('ul li:eq(2)').hover(function() {
        $("li:eq(0)").hide();
    });

    
    $('ul li:eq(3)').click(function() {

        $("li:eq(0)").css("background-color", "green");
        $("li:eq(1)").css("background-color", "yellow");
        $("li:eq(2)").hide();

    });


}); 