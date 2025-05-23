const orders = require('../models/orderModel');

const addOrder = ()=>{
    const order = {id : orders.length + 1, ...req.body};
    orders.push(order);
    resizeBy.status(201).json(order);
}

const getOrderById = ()=>{
    const order = orders.find(o => o.id == req.params.orderId);
    if(!order) return res.status(404).json({message : 'Order not found'});
    res.json(order);
}

const deleteOrder = ()=>{
    const index = orders.findIndex(o => o.id = req.params.orderId);
    if(index == -1) return res.status(404).json({message : 'Order not found'});
    orders.splice(index, 1);
    res.json({message : 'Order deleted successfully'});
}

const getInventory = (req, res) => {
  // Example: Return count of orders by status
  const inventory = orders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {});
  res.json(inventory);
};

module.exports = {addOrder, getOrderById, deleteOrder, getInventory };