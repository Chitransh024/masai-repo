const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    const price = Number(item.price);

    if (!item.name || typeof item.price === "undefined" || isNaN(price)) {
      console.log("Invalid price.");
      return false;
    }

    this.items.push({ name: item.name, price });
    this.total += price;
    return true;
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  }
};

checkout.addItem({ name: "Coffee Maker", price: "99.95" });
checkout.addItem({ name: "Milk", price: 3.50 });

console.log(checkout.getTotal());
