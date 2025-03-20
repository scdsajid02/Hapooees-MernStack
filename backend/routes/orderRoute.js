import express from "express";
import {
  placeOrder,
  updateStatus,
  placeOrderRazorpay,
  placeOrderStripe,
  allOrders,
  userOrders,
  verifyStripe,
  verifyRazorpay,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";
const orderRouter = express.Router();

//admin feautures
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//payment feautures
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

//user feauture

orderRouter.post("/userorders", authUser, userOrders);


//verify payment
orderRouter.post("/verifyStripe",authUser,verifyStripe)
orderRouter.post("/verifyRazorpay", authUser, verifyRazorpay);
export default orderRouter;
