const getAllUsers = (req, res) => {
    return res.json([
        {
            id: 1,
            name: "Edneuza"
        }

    ])
}
module.exports = {
    getAllUsers
}