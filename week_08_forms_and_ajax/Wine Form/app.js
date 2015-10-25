$(document).on("click", ".console", function() {
    event.preventDefault();
    $.ajax({
        type: "GET",
        url: "http://daretodiscover.herokuapp.com/wines",
        success:function(data){
            console.log(data);
        },
        error: function(){
            alert("Error!");
        }
    }); 
    });
$(document).on("submit", "form", function(){
   event.preventDefault();
    
    var wineData = {
        name: $("input[name = 'name']").val(),
        year: $("input[name='year']").val(),
        grapes: $("input[name='grapes']").val(),
        country: $("input[name='country']").val(),
        region: $("input[name='region']").val(),
        price: $("input[name='price']").val(),
        description: $("input[name='description']").val(),
    };
    
    $.ajax({
        type: "POST",
        url: "http://daretodiscover.herokuapp.com/wines",
        data:wineData,
        success: function() { 
            console.log(wineData);
        },
        error: function() { 
            alert("Error!");
        }
    });
    $("form")[0].reset();
    
});
