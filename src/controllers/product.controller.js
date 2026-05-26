import { products } from "../models/product.model.js";

// GET: /products (all / by ?name=jedi)
export const getProducts = (req, res) => {
    const { name } = req.query;

    if (name) {
        const filteredProducts = products.filter((p) =>
            p.name.toLowerCase().includes(name.toLowerCase()),
        );
        return res.status(200).json(filteredProducts);
    }

    res.status(200).json(products);
};
