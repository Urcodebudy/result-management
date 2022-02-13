exports.testRoute = (req, res, next) => {
    res.status(200).json({
        success : true,
        msg : "This is testing route "
    })
}