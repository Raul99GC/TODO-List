const userDB = [{
    id: 1,
    name: "",
    age: 20,
    email: "",
    country: "",
    phone: ""
}]

/* 
    {   
        id:1,
        name:"",
        age:20,
        email:"",
        country:"",
        phone:""
    }
*/


const getAllUsers = () => {
    return userDB
};

const getUserById = id => {
    const filteredDB = userDB.filter((user) => user.id === id)
    return filteredDB[0]
};

const createUser = (userObj) => {
    if (userDB.leng === 0) {
        const newUser = {
            id: 1,
            name: userObj.name,
            age: userObj.age,
            email: userObj.email,
            country: userObj.country,
            phone: userObj.phone
        }
        userDB.push(newUser)
        return newUser
    }
    const newUser = {
        id: userDB[userDB.length - 1].id + 1,
        name: userObj.name,
        age: userObj.age,
        email: userObj.email,
        country: userObj.country,
        phone: userObj.phone
    }
    userDB.push(newUser)
    return newUser

};

const deleteUser = (id) => {
    const index = userDB.findIndex(item => item.id === id)
    if (index !== -1) {
        userDB.splice(index, 1)
        return true
    } else {
        return false
    }
};

const editUser = (userObj) => {
    const index = userDB.findIndex(item => item.id === userObj.id)
    if (userObj.name && userObj.age && userObj.email && userObj.country && userObj.phone) {
        userDB[index] = {
            id: userObj.id,
            name: userObj.name,
            age: userObj.age,
            country: userObj.country,
            phone: userObj.phone
        }
        return userDB[index]
    } else {
        return false
    }
};


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    editUser
}