import express from "express"
import authMiddleware from "../middleware/auth.js"
import { deleteOrders, listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from "../controllers/orderContreller.js"

const orderRouter = express.Router();

orderRouter.post("/place" , authMiddleware, placeOrder);
orderRouter.post("/verify" , verifyOrder);
orderRouter.post("/userorders",authMiddleware, userOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/delete", deleteOrders);
orderRouter.post("/status", updateStatus);


export default orderRouter;
