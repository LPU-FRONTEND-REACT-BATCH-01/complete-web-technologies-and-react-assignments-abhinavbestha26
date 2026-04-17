let users = [
    {
        id:1,
        username:'abhinavbestha',
        password:'TEN'
    },
    {
        id:2,
        username:'Suresh',
        password:'POTTIAMMAY'
    },
    {
        id:3,
        username:'DNS',
        password:'AMMAY'
    }
]



let inputData = {
    username:'abhinavbestha',
    password:'TEN'
}


let results = users.some((Element => Element.username === inputData.username))
if(results){
    let user = users.find(Element => Element.username === inputData.username)
    if(user.password === inputData.password){
        console.log("logined Successfully");
    }else{
        console.log("password Not Matched!");
    }
}else{
    console.log("user Not Found please SignUp!");
}