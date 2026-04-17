let cartItems = [];
    let productContainer = document.querySelector("#product-container");
let cartContainer = document.querySelector("#Cart-container")
let fetchdata = async()=>{
    try{
        let res = await fetch("https://dummyjson.com/products");
        console.log(res)
        if(res.ok){
            let database = await res.json();
            console.log(database)
            displayData(database.products);
        }
    }catch(error){
        console.log(error);
    }
}

let displayData = (database)=>{
    database.map((products)=>{
    let container = document.createElement("ul")
    let title = document.createElement("li")
    let button = document.createElement("button"); 
    let price = document.createElement("li")

    title.textContent = products.title;
    price.textContent = products.price;
    button.textContent = "AddToCart"
    button.addEventListener("click",()=>{
        addToCart(products);
    })
    container.append(title,price,button);
    productContainer.append(container);
    })
    
}

fetchdata();

function addToCart(product) {
    cartItems.push(product);
    console.log("Cart Items:", cartItems);
    displayCart(cartItems); 
}

let displayCart = (cartItems) => {
    cartItems.map((ele)=>{
         let container = document.createElement("ul");

        let title = document.createElement("li");
        let price = document.createElement("li");

        title.textContent = ele.title;
        price.textContent = ele.price;

        container.append(title, price);
        cartContainer.append(container);
    });
}





// let cartItem = []
// let product1 = [{id:1,"name":laptop}]

// document.querySelector("button").addEventListener("click",()=>{
//     cartItem.push(product1);
//     console.log(cartItem)
//     localStorage.setItem("cartItems",json.stringify(cartItem))
// })
// let cartItems = Json.parse(localStorage.getItem(cartdata)) || []