//displays UTC Time
$(document).ready(function (){
    startTime();  
  });
  
  function startTime()
      {
          var today=new Date(); //-11 hrs
          var h=today.getUTCHours();
          var m=today.getUTCMinutes();
          var s=today.getUTCSeconds();
  
  // add a zero in front of numbers<10
          m=addZero(m);
          s=addZero(s);
          document.getElementById('utcTime').innerHTML=h+":"+m+":"+s;
          t=setTimeout(function(){startTime()},500);
      }
  
      function addZero(x)
      {
          if (x<10)
          {
              x="0" + x;
          }
          return x;
      }