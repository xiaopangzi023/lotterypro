function nums(v){
return v.split(',')
.map(x=>parseInt(x))
.filter(x=>!isNaN(x))
}

function rand(min,max){
return Math.floor(
Math.random()*(max-min+1)
)+min
}

function generate(){

const mode =
document.getElementById("mode").value

const danma =
nums(
document.getElementById("danma").value
)

const kill =
nums(
document.getElementById("kill").value
)

const count =
parseInt(
document.getElementById("count").value
)

let txt=""

for(let i=1;i<=count;i++){

if(mode==="ssq"){

let set=new Set(danma)

while(set.size<6){

let n=rand(1,33)

if(!kill.includes(n)){
set.add(n)
}

}

let blue=rand(1,16)

txt +=
`第${i}注：
${[...set].sort((a,b)=>a-b).join(" ")}
+
${blue}

`

}else{

let set=new Set(danma)

while(set.size<5){

let n=rand(1,35)

if(!kill.includes(n)){
set.add(n)
}

}

let back=[]

while(back.length<2){

let n=rand(1,12)

if(!back.includes(n)){
back.push(n)
}

}

txt +=
`第${i}注：
${[...set].sort((a,b)=>a-b).join(" ")}
+
${back.sort((a,b)=>a-b).join(" ")}

`

}

}

document.getElementById("result").textContent = txt

}
