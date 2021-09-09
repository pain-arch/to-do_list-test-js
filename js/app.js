//load data from local-storage
const displayLocalStorage = () => {
    const cart = getCart();
    for (const name in cart) {
        displayproduct(name);
    }
}

const addItem = () =>{
    const productName = document.getElementById('product-name');
    const name = productName.value;
    // show addeded product
    if(!name){
        return;
    }
    displayproduct(name);

    // add item to cart
    addItemToCart(name);

    productName.value = '';
};

const displayproduct = name =>{
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
};

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
};

const addItemToCart = name => {
    const cart = getCart();
    if(cart[name]){
        cart[name] = cart[name] +1;
    }
    else{
        cart[name] = 1 ;
    }
    const stringified = JSON.stringify(cart);
    localStorage.setItem('cart',stringified);
};

const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

displayLocalStorage();