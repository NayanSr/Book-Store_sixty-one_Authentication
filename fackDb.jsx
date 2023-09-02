const getStoredShopingCart = () => {
  let storedShopingCart = localStorage.getItem("shoping-cart");
  if (storedShopingCart) {
    storedShopingCart = JSON.parse(storedShopingCart);
  } else {
    storedShopingCart = {};
  }
  return storedShopingCart;
};

/* const addToDb = (id) => {
  let storedShopingCart = getShopingCart();
  const quantity = storedShopingCart[id];
  if (!quantity) {
    storedShopingCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    storedShopingCart[id] = newQuantity;
  }
  localStorage.setItem("shoping-cart", JSON.stringify(storedShopingCart));

  return storedShopingCart;
}; */

const addToDb = (id) => {
  let storedShopingCart = getStoredShopingCart();
  const quantity = storedShopingCart[id];
  if (quantity) {
    storedShopingCart[id] = quantity + 1;
  } else {
    storedShopingCart[id] = 1;
  }
  localStorage.setItem("shoping-cart", JSON.stringify(storedShopingCart));

  return storedShopingCart;
};

const removeOneFromDb = (id) => {
  const storedShopingCart = getStoredShopingCart();
  if (id in storedShopingCart) {
    delete storedShopingCart[id];
    localStorage.setItem("shoping-cart", JSON.stringify(storedShopingCart));
  }
};

const deleteStoredShopingCart = () => {
  localStorage.removeItem("shoping-cart");
};

export {
  getStoredShopingCart,
  addToDb,
  removeOneFromDb,
  deleteStoredShopingCart,
};
