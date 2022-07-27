const router = require('express').Router()
const httpUsers = require('./users.http')


//! router.get('/users', gttpUser.getAll)
//! router.post('/users')

//! router.get('/users/:id', gttpUser.getById)
//! router.put('/users/:id')
//! router.delete('/users/:id')



router.route('/users')
    .get(httpUsers.getAll)
    .post(httpUsers.createNewUser)

router.route('/users/:id')
    .get(httpUsers.getById)
    .put(httpUsers.editUserId)
    .delete(httpUsers.deleteUserId)

module.exports = {
    router
}