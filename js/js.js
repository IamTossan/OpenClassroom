$(document).ready(function(){
    
    var titleOpen = true;
    
    $("button").click(function(){
        
        $("h1").slideToggle('slow');
        if (titleOpen){
            titleOpen = false;
            $("button").text("Show");
        } else {
            titleOpen = true;
            $("button").text("Hide");
        }
    });
    
    
});