import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    subscribedAt: { type: Date, default: Date.now },
    unsubscribed: { type: Boolean, default: false } // Track if the user has unsubscribed
  });

export const Subscriber = mongoose.model("Subscriber", subscriberSchema);