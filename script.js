$(document).ready(function () {
   
     
        $('#1 ,#id1').on(
            {
                click: function () {
                    $('#id1').fadeToggle(500, function(){
                        
                    console.log('Thanks for clicking', this);
                })
                
 } })
 $('#2 ,#id2').on(
    {
        click: function () {
            $('#id2').fadeToggle(500, function(){
                
            console.log('Thanks for clicking', this);
        })
        
} })
$('#3 ,#id3').on(
    {
        click: function () {
            $('#id3').fadeToggle(500, function(){
                
            console.log('Thanks for clicking', this);
        })
        
} })
$('#4 ,#id4').on(
    {
        click: function () {
            $('#id4').fadeToggle(500, function(){
                
            console.log('Thanks for clicking', this);
        })
        
} })

 
})