$(document).ready(function() {
    
        $.ajax({
            type: "GET",
            url: "http://daretodiscover.herokuapp.com/users",
            success: function(users) {
                var source = $("#users-template").html();

                var template = Handlebars.compile(source);

                for (var i = 0; i < users.length; i++) {
                    $(".users-data").append(template(users[i]));
                    
                    
                }
            }
        });
});