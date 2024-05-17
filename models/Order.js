const Order = class {
  constructor(id, customerName, productName, quantity, orderStatusId) {
    this.id = id;
    this.customerName = customerName;
    this.productName = productName;
    this.quantity = quantity;
    this.orderStatusId = orderStatusId;
  }
}

module.exports = Order;