  function star(n){
  for (let row= 1;row<=n;row++){
   let line='';
    for (let col=1;col<=n+1-row;col++){
      line+="*";
     
    }
       console.log(line);
  }
  }
  
  console.log(star(4))