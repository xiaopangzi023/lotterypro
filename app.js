function arr(v){
  return v.split(',')
    .map(x=>parseInt(x.trim()))
    .filter(x=>!isNaN(x));
}

function r(min,max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

function gen(){
  let mode=document.getElementById("mode").value;
  let danma=arr(document.getElementById("danma").value);
  let kill=arr(document.getElementById("kill").value);
  let count=parseInt(document.getElementById("count").value)||10;

  let out="";

  for(let i=1;i<=count;i++){

    if(mode==="ssq"){
      let set=new Set(danma);
      while(set.size<6){
        let n=r(1,33);
        if(!kill.includes(n)) set.add(n);
      }
      let red=[...set].sort((a,b)=>a-b);
      let blue=r(1,16);

      out+=`第${i}注: ${red.join(" ")} + ${blue}\n`;
    }else{
      let set=new Set(danma);
      while(set.size<5){
        let n=r(1,35);
        if(!kill.includes(n)) set.add(n);
      }
      let back=[];
      while(back.length<2){
        let n=r(1,12);
        if(!back.includes(n)) back.push(n);
      }

      out+=`第${i}注: ${[...set].sort((a,b)=>a-b).join(" ")} + ${back.sort((a,b)=>a-b).join(" ")}\n`;
    }
  }

  document.getElementById("out").innerText=out;
}