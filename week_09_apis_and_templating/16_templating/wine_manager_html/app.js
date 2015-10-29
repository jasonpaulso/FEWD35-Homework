$(document).ready(function(){

        $.ajax({
            type: "GET",
            url: "http://daretodiscover.herokuapp.com/wines",
            success: function(wines) {
                var source = $("#wine-data").html();

                var template = Handlebars.compile(source);

                for (var i = 0; i < wines.length; i++) {
                    $(".wine-container").append(template(wines[i]));
                }
            }
        });
    
    
    
    
    
    
    
    
});