import { products } from "../models/product.model.js";

// GET: /products
export const getProducts = async (req, res, next) => {
    try {
        const { name } = req.query;
        const data = name
            ? products.filter((p) =>
                  p.name.toLowerCase().includes(name.toLowerCase()),
              )
            : products;

        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
};

// GET: /products/:id
export const getProductById = async (req, res, next) => {
    try {
        const product = products.find((p) => p.id === req.params.id);
        if (!product)
            return res.status(404).json({ message: "Product not found" });

        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
};
