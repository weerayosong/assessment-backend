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

// POST: /products
export const createProduct = async (req, res, next) => {
    try {
        const { name, price, quantity } = req.body;
        if (!name || !price)
            return res
                .status(400)
                .json({ message: "Name and price are required" });

        const newProduct = {
            id: String(Date.now()),
            name,
            price: Number(price),
            quantity: Number(quantity || 1),
        };

        products.push(newProduct);
        res.status(201).json({
            message: "Product created",
            product: newProduct,
        });
    } catch (err) {
        next(err);
    }
};

// PUT: /products/:id
export const updateProduct = async (req, res, next) => {
    try {
        const product = products.find((p) => p.id === req.params.id);
        if (!product)
            return res.status(404).json({ message: "Product not found" });

        const { name, price, quantity } = req.body;

        if (name) product.name = name;
        if (price) product.price = Number(price);
        if (quantity) product.quantity = Number(quantity);

        res.status(200).json({ message: "Product updated", product });
    } catch (err) {
        next(err);
    }
};

// DELETE: /products/:id
export const deleteProduct = async (req, res, next) => {
    try {
        const index = products.findIndex((p) => p.id === req.params.id);
        if (index === -1)
            return res.status(404).json({ message: "Product not found" });

        products.splice(index, 1);
        res.status(200).json({ message: "Product deleted" });
    } catch (err) {
        next(err);
    }
};
