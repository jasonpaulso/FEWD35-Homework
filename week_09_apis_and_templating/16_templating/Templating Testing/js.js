$(document).ready(function(){
var users = [
{
firstname: "Jason",
lastname: "Doe",
username: "jasonpaulso",
age:34
},
{
firstname:"Wanda",
lastname:"Meetcha",
username:"wandameetcha",
age:54
}
];

var source= $("#users-template").html();

var template = Handlebars.compile(source); 

for(var i = 0; i < users.length; i++) {
$(".users-data").append(template(users[i]));
};
});

$(document).ready(function(){
var users = $.ajax({
type:"GET",
url: "http://daretodiscover.herokuapp.com/users", 
sucess: function(){},
error: function(){},
});
console.log(users);

var source= $("#users-template").html();

var template = Handlebars.compile(source); 

for(var i = 0; i < users.length; i++) {
$(".users-data").append(template(users[i]));
};
});

$(document).ready(function(){
var users = function(){
$.ajax({
type:"GET",
url:"http://daretodiscover.herokuapp.com/users",
success: function(users) {
for (var i = 0; i <users.length; i++) {
console.log(users[i]);
}
}
});
}
});

$(document).ready(function(){
$.ajax({
type:"GET",
url:"http://daretodiscover.herokuapp.com/users",
success: function(users) {
for (var i = 0; i < users.length; i++) {
console.log(users[i]);
}
}
});


});

$(document).ready(function(){
var userData = 

});





