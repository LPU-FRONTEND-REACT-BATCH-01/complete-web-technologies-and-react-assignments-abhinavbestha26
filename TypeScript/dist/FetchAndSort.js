"use strict";
function displayData(data) {
    console.log(data);
}
let fetchdata = async () => {
    try {
        let res = await fetch("https://dummyjson.com/products");
        if (res.ok) {
            let database = await res.json();
            let products = database.products;
            processData(products);
        }
    }
    catch (error) {
        console.log(error);
    }
};
function processData(products) {
    let price5to10 = products.filter((p) => p.price > 5 && p.price < 10);
    let priceAbove10 = products.filter((p) => p.price > 10);
    let AtoZ = [...products].sort((a, b) => a.title.localeCompare(b.title));
    let ZtoA = [...products].sort((a, b) => b.title.localeCompare(a.title));
    let categoryObj = {
        shirts: products.filter(p => p.category === "mens-shirts"),
        beauty: products.filter(p => p.category === "beauty")
    };
    console.log("5-10$", price5to10);
    console.log(">10$", priceAbove10);
    console.log("A-Z", AtoZ);
    console.log("Z-A", ZtoA);
    console.log("Category", categoryObj);
    displayData(products);
}
fetchdata();
