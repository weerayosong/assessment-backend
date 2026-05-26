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
export const createProduct = (req, res) => {
    const { name, price, quantity } = req.body;
    if (!name || !price)
        return res.status(400).json({ message: "name and price are required" });

    const newProduct = {
        id: String(Date.now()),
        name,
        price: Number(price),
        quantity: Number(quantity || 1),
    };

    products.push(newProduct);
    res.status(201).json({ message: "Product created", product: newProduct });
};
