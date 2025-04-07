import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js";
// import path from "path";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ["http://localhost:3000", "https://byv-nfqn.onrender.com", "https://www.buildyourvision.in"],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// API Routes
// API Routes
app.use("/api/contact", contactRoutes);

// MongoDB Connection
// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    // 🔥 Only start server after MongoDB connection

    // 🔥 Only start server after MongoDB connection
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));

// ✅ Serve React frontend
// const __dirname = path.resolve();

// // Serve React frontend from build
// app.use(express.static(path.join(__dirname, "./build")));

// // Fallback for client-side routes
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./build/index.html"));
// });
