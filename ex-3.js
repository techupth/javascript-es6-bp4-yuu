let orders = [
  { orderId: "A001", paymentType: "Cash", totalPrice: 2500 },
  { orderId: "A002", paymentType: "Credit Card", totalPrice: 4000 },
  { orderId: "A003", paymentType: "Credit Card", totalPrice: 6000 },
];

let additionalOrders = [
  { orderId: "A004", paymentType: "Credit Card", totalPrice: 611000 },
  { orderId: "A005", paymentType: "Credit Card", totalPrice: 45000 },
];

// Start coding here

function combineOrder (oreders, additionalOrders) {
      return [...orders,...additionalOrders]
}

let newOrders = combineOrder(orders, additionalOrders)
console.log(newOrders);
