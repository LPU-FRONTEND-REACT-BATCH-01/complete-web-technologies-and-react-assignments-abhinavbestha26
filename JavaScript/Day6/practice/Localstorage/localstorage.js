let cartItem = []
let product1 = [{id:1,"name":laptop}]

document.querySelector("button").addEventListener("click",()=>{
    cartItem.push(product1);
    console.log(cartItem)
    localStorage.setItem("cartItems",json.stringify(cartItem))
})