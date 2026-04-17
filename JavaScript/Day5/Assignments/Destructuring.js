let users = {
    id:1,
    usernames:"Nigga",
    userLocation:{
        city:"kurnool",
        state:"AndhraPradesh"
    },
    Skills:{
        frontend:["react","HTML","CSS"],
        backend:["Java","Springboot"]
    }
}


let{id,usernames,userLocation:{city,state},Skills:{frontend:[fsub1,fsub2,fsub3],backend:[bsub1,bsub2,bsub3]}} = users;

console.log(id,usernames,city,state,fsub1,bsub1); 


