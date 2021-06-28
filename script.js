var x = -1.1;
var sum = 0;
var dx = 1/10000000;

while (x<1) {
  sum += 2*Math.sqrt(1-x*x)*dx;
  x += dx;
  
}

var pi = document.getElementById("pi");
pi.innerHTML = sum

