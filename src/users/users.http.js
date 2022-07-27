const { createUser, getUserById, getAllUsers, deleteUser, editUser } = require('./users.controllers')

const getAll = (req, res) => {
    const data = getAllUsers()
    res.status(200).json(data)
}

const getById = (req, res) => {
    const id = Number(req.params.id)

    if (id) {
        const data = getUserById(id)
        if (data.id) {
            res.status(200).json(data)
        } else {
            res.status(400).json({ message: 'Invalid ID' })
        }
        res.status(200).json(data)
    } else {
        res.status(400).json({ message: 'Id is not a number' })
    }
}

const createNewUser = (req, res) => {
    const data = createUser(req.body)
    res.status(201).json({ message: 'user created' })
}


const editUserId = (req, res) => {
    const id = Number(req.params.id)
    const data = getUserById(id)
    if(id) {
        const userObj = {id: id, ...req.body}
        if(id === data?.id) {
            const dataUpdate = editUser(userObj)
            res.status(200).json(dataUpdate)

        } else {
            res.status(400).json({ message: 'Invalid ID' })
        }
    } else {
        res.status(400).json({ message: 'Id is not a number' })
    }
}

const deleteUserId = (req, res) => {
    const id = Number(req.params.id)
    if(id) {

        const delUser = deleteUser(id)
        res.status(204).json(delUser)

    } else {
        res.status(400).json({ message: 'Id is not a number' })
    }
}


module.exports = {
    getAll,
    getById,
    createNewUser,
    editUserId,
    deleteUserId
}