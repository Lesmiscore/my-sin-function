const PI=Math.PI;
const TAU=PI*2;
const PI2=PI/2;

function powAndDiv(x,p){
  return Math.pow(x,p)/p;
}

module.exports=function sin(x){
  // optimization: sin(n*PI*x)=0
  if(x%PI==0){
    return 0;
  }
  // optimization: -sin(-x)=sin(x)
  if(x<0){
    return -sin(-x);
  }
  // optimization: sin(TAU+x)=sin(x)
  if(x>TAU){
    return sin(x%TAU);
  }
  // optimization: y=sin(x) is symmetric at x=PI
  if(x>PI){
    return -sin(x-PI);
  }
  // optimization: y=sin(x) is symmetric at x=PI/2
  if(x>PI2){
    return sin(PI-x);
  }
  // optimization: sin(n*TAU+PI/2)=1
  if(x==PI2){
    return 1;
  }
  // perform real calculation for 0<x<PI2 (exclusive)
  // that's ok to calculate taylor expansion of sin(x) at a=4
  return x-Math.pow(x,3)/6+Math.pow(x,5)/120-Math.pow(x,7)/(120*42);
}
