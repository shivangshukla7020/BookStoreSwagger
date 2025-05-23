const express = require('express');
const router = express.Router();
const { addOrder, getOrderById, deleteOrder, getInventory} = require('../controllers/orderController');

/**
 * @swagger
 * tags:
 *   name: Order
 *   description: Operations related to orders
 */

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Place a new order
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bookId:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *               status:
 *                 type: string
 *                 enum: [placed, approved, delivered]
 *     responses:
 *       201:
 *         description: Order placed successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', addOrder);

/**
 * @swagger
 * /order/{orderId}:
 *   get:
 *     summary: Find order by ID
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: orderId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the order to retrieve
 *     responses:
 *       200:
 *         description: Order found
 *       404:
 *         description: Order not found
 */
router.get('/:orderId', getOrderById);

/**
 * @swagger
 * /order/{orderId}:
 *   delete:
 *     summary: Delete order by ID
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: orderId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the order to delete
 *     responses:
 *       200:
 *         description: Order deleted
 *       404:
 *         description: Order not found
 */
router.delete('/:orderId', deleteOrder);

/**
 * @swagger
 * /order/inventory:
 *   get:
 *     summary: Get inventory status
 *     tags: [Order]
 *     responses:
 *       200:
 *         description: Inventory retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               additionalProperties:
 *                 type: integer
 */
router.get('/inventory', getInventory);

module.exports = router;
