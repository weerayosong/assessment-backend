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
