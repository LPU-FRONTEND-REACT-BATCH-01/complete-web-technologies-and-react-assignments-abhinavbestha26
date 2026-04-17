interface products{
    id:number,
    title:string,
    price:number
}


let arr:products[]=[
    {
        id:1,
        title:"Gun",
        price:999
    },
    {
       id:2,
        title:"B-2 BOMBER",
        price:999 
    }
]

let product1:products={
    id:2,
    title:"B-2 BOMBER",
    price:999 
    
}
arr.push(product1);
