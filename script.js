setInterval(function(){
 var d = new Date();
 htime = d.getHours();
 mtime = d.getMinutes();
 stime = d.getSeconds();
 hrotation = 30*htime + mtime/2;
 mrotation = 6*mtime;
 srotation = 6*stime;

 document.getElementById("hours").style.transform = "rotate(" + hrotation + "deg)";
 document.getElementById("minutes").style.transform = "rotate(" + mrotation + "deg)";
 document.getElementById("seconds").style.transform = `rotate(${srotation}deg)`;

}, 1000);
