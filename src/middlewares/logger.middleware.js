export const requestLogger = (req, res, next) => {
    console.log(`method: ${req.method}, url: ${req.url}`);
    next();
};
