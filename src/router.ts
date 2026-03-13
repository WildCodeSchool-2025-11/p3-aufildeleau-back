import { Router } from "express";
import authRoutes from "./modules/auth/authRoutes.js";
import itemsRoutes from "./modules/items/itemsRoutes.js";

const router = Router();

router.use("/api/items", itemsRoutes);
router.use("/api/auth", authRoutes);

export default router;
