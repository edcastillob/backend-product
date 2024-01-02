
async function cancel(req, res) {
    return res.status(200).json({message: 'cancel'})
}
module.exports = {
    cancel,
};
