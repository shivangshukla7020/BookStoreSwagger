const express = require('express');
const router = express.Router();
const multer = require('multer');
const { addBook, updateBook, findByStatus, findById, deleteBook, updateBookForm, uploadImage } = require('../controllers/bookController');
const upload = multer({ dest: 'uploads/' });


/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Operations related to books
 */

/**
 * @swagger
 * /book:
 *   post:
 *     summary: Add a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - status
 *               - genre
 *             properties:
 *               name:
 *                 type: string
 *               status:
 *                 type: string
 *               genre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Book created successfully
 *       400:
 *         description: Error
 */
router.post('/', addBook);

/**
 * @swagger
 * /book:
 *   put:
 *     summary: Update existing book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - name
 *               - status
 *               - genre
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *               status:
 *                 type: string
 *               genre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Book updated successfully
 *       404:
 *         description: Book not found
 */
router.put('/', updateBook);

/**
 * @swagger
 * /book/findByStatus:
 *   get:
 *     summary: Finds books by status
 *     tags: [Books]
 *     parameters:
 *       - in: query
 *         name: status
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of books by status
 */
router.get('/findByStatus', findByStatus);

/**
 * @swagger
 * /book/{bookId}:
 *   get:
 *     summary: Find book by it' ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Book found
 *       404:
 *         description: Book not found
 */
router.get('/:bookId', findById);

/**
 * @swagger
 * /book/{bookId}:
 *   delete:
 *     summary: Delete a book
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *       404:
 *         description: Book not found
 */
router.delete('/:bookId', deleteBook);

/**
 * @swagger
 * /book/{bookId}:
 *   post:
 *     summary: Update book using form data
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Book updated via form
 *       404:
 *         description: Book not found
 */
router.post('/:bookId', updateBookForm);

/**
 * @swagger
 * /book/{bookId}/uploadImage:
 *   post:
 *     summary: Upload book image
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Image uploaded successfully
 *       400:
 *         description: No file uploaded
 *       404:
 *         description: Book not found
 */
router.post('/:bookId/uploadImage', upload.single('file'), uploadImage);

module.exports = router;
