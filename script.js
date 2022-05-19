<script type="text/javascript">
     
         var myVar= setInterval(function(){mytimer()}, 1000); 
       // the method works every 1000m.sec 
        var x=0;
       function mytimer() {
         var d= new Date();

         document.getElementById("re").innerHTML=x;
         x++;

       }
     </script>