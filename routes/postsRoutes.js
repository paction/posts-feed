import express from 'express';
const router = express.Router();
import { getpostss, saveposts } from '../controllers/postsController.js';

// Define route to get posts data
router.get('/postss', getpostss);

// Define route to create or update posts data
router.post('/posts', saveposts);

export default router;
