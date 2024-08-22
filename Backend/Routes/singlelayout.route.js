import express from 'express';
import { CreateDrop } from '../controller/drop.controller.js';

const router = express.Router();

router.post('/', CreateDrop);

export default router;