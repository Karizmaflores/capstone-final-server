const pool = require("../sql/connection");
const bcrypt =  require("bcrypt");

const create = async (req, res) => {
    const { name, email, password } = req.body;
    //Abtract the variable values

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log({hashedPassword});

    pool.query(`INSERT INTO users (id, name, email, password) VALUES(?, ?, ?, ?)`, 
    //Dependency array
    [null, name, email, hashedPassword],
    (err, results, fields) => {
        res.json(results);
    }
  )
}

module.exports = {
    create,
}