import express from 'express';
import { CreateDrop, getDrop } from '../controller/drop.controller.js';

const router = express.Router();

router.post('/', CreateDrop);
router.get('/', getDrop)

export default router;