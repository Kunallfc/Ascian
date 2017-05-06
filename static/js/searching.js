
$(".button1").click(function(){
    
   $("#two").text(" "); 
   url = "http://127.0.0.1:8000/results/?search=" + $("#search").val() ; 

    $.get(url, function(data, status){
        
        
//        $("#two").text(data['name']);
         
       var dt = JSON.parse(data);
       
         var z = Object.keys(dt.data).length; 
         console.log(dt.data[0].name);
   var tb1 = $("<table/>").attr("id","mytable");
    $("#two").append(tb1);
        for(var i=0;i<z;i++)
         {
              var tr="<tr>"
              var td1 = "<td>" + dt.data[i].name +"</td>";
              var td3 = "<td>" + "  from  " +"</td>";
              var td2 = "<td>" + dt.data[i].location +"</td></tr>";
              $("#mytable").append(tr+td1+td3+td2);               

         }

    $("#mytable").css({'color':'red' , 'font-size':'150%' });

    
    });

});



$(".button2").click(function(){
    
  $("#two").text(" ");

   url = "http://127.0.0.1:8000/again/?search=" + $("#search").val() ; 
    console.log(url);
    $.get(url, function(data, status){
                 
       var dt = JSON.parse(data);
       
         var z = Object.keys(dt.data).length; 
         console.log(dt.data[0].name);
   var tb1 = $("<table/>").attr("id","mytable");
    $("#two").append(tb1);
        for(var i=0;i<z;i++)
         {
              var tr="<tr>"
              var td1 = "<td>" + dt.data[i].name +"</td>";
              var td3 = "<td>" + "  from  " +"</td>";
              var td2 = "<td>" + dt.data[i].location +"</td></tr>";
              $("#mytable").append(tr+td1+td3+td2);               

         }

    $("#mytable").css({'color':'red' , 'font-size':'150%' });
         



    
    });

});

