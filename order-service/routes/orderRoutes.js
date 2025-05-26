const express = require('express');
const router = express.Router();
const { addOrder, findById, deleteOrder, getInventory} = require('../controllers/orderController');

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Operations related to orders
 */

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Place a new order
 *     tags: [Orders]
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
 *     summary: Find order using ID
 *     tags: [Orders]
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
router.get('/:orderId', findById);

/**
 * @swagger
 * /order/{orderId}:
 *   delete:
 *     summary: Delete order by ID
 *     tags: [Orders]
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
 *     tags: [Orders]
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
