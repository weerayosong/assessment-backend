import express from "express";

import productRoutes from "./routes/product.route.js";

import { requestLogger } from "./middlewares/logger.middleware.js";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.use(requestLogger);

app.use("/products", productRoutes);

app.get("/", (req, res) => {
    res.send("May the force be with you");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
