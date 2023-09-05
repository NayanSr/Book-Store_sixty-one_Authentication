import { getStoredShopingCart } from "../../fackDb";

const cartBooksLoader = async () => {
  const loadedBooks = await fetch("books.json");
  const books = await loadedBooks.json();

  // load localstorage data
  const storedCart = getStoredShopingCart();
  const savedBooks = [];

  for (const id in storedCart) {
    const addedBooks = books.find((book) => book.id === parseInt(id));
    if (addedBooks) {
      const quantity = storedCart[id];
      addedBooks.quantity = quantity;
      savedBooks.push(addedBooks);
    }
  }

  return [savedBooks, books]; // no need to send books. It is for test
};

export default cartBooksLoader;
