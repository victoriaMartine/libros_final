import "dotenv/config"

const PORT = process.env.PORT || 3000
// agrego un puerto defaul en caso de no existir la variable env en el server
const MODE = process.env.MODE

export  {PORT, MODE}