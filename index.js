const { register, read } = require("./operaciones.js");
const value = process.argv.slice(2);

const select = (operation) => {
    if(operation === "registrar"){
        register(value[1], value[2], value[3], value[4], value[5])
        }
    if(operation === "leer"){
        read()
        }
        
};

select(value[0]);