const Order = require("../models/Order.js");
const OrderStatus = require("../models/OrderStatus.js");

Order;
OrderStatus;

const orders = [
  new Order(1, "Customer 1", "Product 1", 1, 1),
  new Order(2, "Customer 2", "Product 2", 2, 2),
  new Order(3, "Customer 3", "Product 3", 3, 3),
  new Order(4, "Customer 4", "Product 4", 5, 3),
  new Order(5, "Customer 5", "Product 5", 10, 1),
];

const OrdersStatuses = [
  new OrderStatus(1, "Pending"),
  new OrderStatus(2, "Shipped"),
  new OrderStatus(3, "Delivered"),
];

const router = (app) => {
  // проверка работоспособности
  app.get("/health", (request, response) => {
    response.send("Приложение работает!");
  });

  // получить список всех заказов
  app.get("/orders", (request, response) => {
    response.send(orders);
  });

  // получить список заказов по статусу заказа
  app.get("/orders/:id/statusOrder", (request, response) => {
    const orderStatusId = parseInt(request.params.id);
    if (orderStatusId) {
      const filteredOrders = orders.filter(
        (order) => order.orderStatusId === orderStatusId
      );
      response.send(filteredOrders);
    } else {
      response.send(orders);
    }
  });
};

module.exports = router;
