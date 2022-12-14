const express = require('express');
const userRouter = require('./users/users.router').router

const app = express()


app.use(express.json())

app.use('/hola', (req, res) => {
    res.json({
        mesage: 'peticion con use',
        metod: req.method
    })
})

//? Aqui se encuentran las rutas de mis usuarios
app.use('/api/v1', userRouter)
//* localhost:8000/api/v1/users

// //? Ruta para obtener todos mis usuarios
// app.get('/users/:id', (req, res) => {
//     const id = Number(req.params.id)
//     const filteredDB = userDB.filter(item => item.id === id)

//     if (filteredDB.length > 0) {
//         res.status(200).json(filteredDB[0])
//     } else {
//         res.status(400).json({
//             message: "Este id no es valido"
//         })
//     }
// })

// app.get('/users', (req, res) => {
//     res.status(200).json(userDB)
// })

// app.post('/users', (req, res) => {
//     const data = req.body
//     if (userDB.length === 0) {
//         const newUser = {
//             id: 1,
//             ...data
//         }
//         userDB.push(newUser)

//     } else {
//         const newUser = {
//             id: userDB[userDB.length - 1].id + 1,
//             ...data
//         }
//         userDB.push(newUser)

//     }

//     res.status(201).json(userDB)
// })

// //TODO: Delete Update

// app.delete('/users/:id', (req, res) => {
//     const id = Number(req.params.id)
//     const index = userDB.findIndex(item => item.id === id)
//     if (index !== -1) {
//         userDB.splice(index, 1)
//         res.status(204).json()
//     } else {
//         res.status(400).json({
//             messge: "invalid ID"
//         })
//     }
// })

// app.put('/users/:id', (req, res) => {
//     const id = Number(req.params.id)
//     const data = req.body
//     const index = userDB.findIndex(item => item.id === id)
//     if (data.name && data.age && data.email && data.country && data.phone) {
//         userDB[index] = {
//             id,
//             name: data.name,
//             age: data.age,
//             country: data.country,
//             phone: data.phone
//         }
//         res.status(200).json(userDB)
//     } else {
//         res.status(400).json({
//             message: 'Missing data'
//         })
//     }
// })

// app.post("/users", (req, res) => {
//     const data = req.body;

//     if (userDB.length === 0) {
//         const newUser = {
//             id: 1,
//             ...data,
//         };
//         userDB.push(newUser);
//     } else {
//         const newUser = {
//             id: userDB[userDB.length - 1].id + 1,
//             ...data,
//         };
//         userDB.push(newUser);
//     }

//     res.status(201).json(userDB);
// });
// //! Controlador
// const createUser = (userObj) => {
//     if (userDB.length === 0) {
//         const newUser = {
//             id: 1,
//             ...data,
//         };
//         userDB.push(newUser);
//     } else {
//         const newUser = {
//             id: userDB[userDB.length - 1].id + 1,
//             ...data,
//         };
//         userDB.push(newUser);
//     }
// }




app.listen(8000, () => {
    console.log("Server started at port 8000")
})