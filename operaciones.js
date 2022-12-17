const fs = require('fs');

const register = (name, age, type, color, disease) => {

    const file = fs.readFileSync("citas.json", "utf8");
    const result = JSON.parse(file);
    const newDate = {
        name: name,
        age: age,
        type: type,
        color: color,
        disease: disease
    };
    fs.writeFileSync("citas.json", JSON.stringify([...result, newDate]));
};

const read = () => {
    const document = fs.readFileSync("citas.json", "utf8");
    JSON.parse(document).forEach((document) => {
        console.log(document)
    });
};

module.exports = {
    register,
    read
};