import express from "express";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("May the force be with you");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
