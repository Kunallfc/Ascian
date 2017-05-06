
$("#sub").click(function(){
    
   var name = $("#name").val();
   var loc = $("#location").val();
   var spec = $('select[name=selector]').val();
   var st_time = $('select[name=st_time]').val();
   var end_time = $('select[name=end_time]').val();

   st_time = parseInt(st_time);
   end_time = parseInt(end_time);
 




    if(st_time>end_time || loc=="" || name=="")
    {
         
       alert("enter correct time details");

    }



else
{

   st_time = st_time.toString();
   end_time = end_time.toString();


   url = "http://127.0.0.1:8000/save/?name=" + name + "&location=" + loc + "&specialization=" + spec + "&time=" + st_time + "&end=" + end_time ;
   console.log(url);
  $.get(url, function(data, status){
         
         console.log(status);

    });

}


});



$("#search").click(function()
{


window.location.href="http://127.0.0.1:8000/search";


});



$("#all").click(function()
{

window.location.href="http://127.0.0.1:8000/doctors";

});