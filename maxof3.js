/*function maxof3(a,b,c){
let max =a;
if(b>max)return max=b;
if(c>max)return max=c;
return max;


}


console.log(maxof3(10, 25, 15));*/



const maxof3=(a,b,c)=>console.log(a>b &&a>c?a:b>c?b:c);
maxof3(10, 25, 15);