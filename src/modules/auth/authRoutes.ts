import { Router } from "express";
import { signin, signup } from "./authActions.js";
import { checkLogin } from "../../middlewares/authMiddleware.js";

const router = Router();

router.post("/signin", checkLogin, signin);
router.post("/signup", signup);

export default router;
