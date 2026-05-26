export const notFoundHandler = (req, res, next) => {
    res.status(404).json({
        message: `404 Not Found`,
    });
};

export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "500 server went wrong!",
        error: err.message,
    });
};
