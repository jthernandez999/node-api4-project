// DO NOT MAKE CHANGES TO THIS FILE
// DO NOT MAKE CHANGES TO THIS FILE
// DO NOT MAKE CHANGES TO THIS FILE
const { nanoid } = require('nanoid')

function getId() {
    return nanoid().slice(0, 5)
}

const initializeUsers = () => ([
    { id: getId(), username: 'Ed Carter', password: 'hero' },
    { id: getId(), username: 'Mary Edwards', password: 'super hero' },
])

// FAKE IN-MEMORY USERS "TABLE"
let users = initializeUsers()

// DATABASE ACCESS FUNCTIONS
// DATABASE ACCESS FUNCTIONS
// DATABASE ACCESS FUNCTIONS
const find = () => {
    // SELECT * FROM users;
    return Promise.resolve(users)
}

const findById = id => {
    // SELECT * FROM users WHERE id = 1;
    const user = users.find(d => d.id === id)
    return Promise.resolve(user)
}

const insert = ({ username, password }) => {
    // INSERT INTO users (username, password) VALUES ('foo', 'bar');
    const newUser = { id: getId(), username, password }
    users.push(newUser)
    return Promise.resolve(newUser)
}

const update = (id, changes) => {
    // UPDATE users SET username = 'foo', password = 'bar WHERE id = 1;
    const user = users.find(user => user.id === id)
    if (!user) return Promise.resolve(null)

    const updatedUser = { ...changes, id }
    users = users.map(d => (d.id === id) ? updatedUser : d)
    return Promise.resolve(updatedUser)
}

const remove = id => {
    // DELETE FROM users WHERE id = 1;
    const user = users.find(user => user.id === id)
    if (!user) return Promise.resolve(null)

    users = users.filter(d => d.id !== id)
    return Promise.resolve(user)
}

const resetDB = () => { // ONLY TESTS USE THIS ONE
    users = initializeUsers()
}

module.exports = {
    find,
    findById,
    insert,
    update,
    remove,
    resetDB, // ONLY TESTS USE THIS ONE
}
