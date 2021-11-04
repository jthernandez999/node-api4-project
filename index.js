require('dotenv').config()
const server = require('./api/server')

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(
        `\n*** Server running on ${PORT} in ${process.env.NODE_ENV} mode! ***`.bgGreen
    )
})