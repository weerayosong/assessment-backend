import express from "express";

import productRoutes from "./routes/product.route.js";

import { requestLogger } from "./middlewares/logger.middleware.js";
import {
    notFoundHandler,
    errorHandler,
} from "./middlewares/error.middleware.js";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(requestLogger);
app.use(express.json());

app.use("/products", productRoutes);

app.get("/", (req, res) => {
    res.send("May the force be with you");
});

// centralize error handler, use at last
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
