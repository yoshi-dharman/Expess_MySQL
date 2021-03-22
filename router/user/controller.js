const connection = require("../../config/db");

module.exports = {
    getAllUser: (req, res) => {
                connection.query(`SELECT * FROM user`, 
                    (err, data) => {
                        if(err){
                            console.log(err);
                        } else{
                            res.json(data);
                        }
                    })},

    getAllUserByID: (req, res) => {
                connection.query(`SELECT * FROM user WHERE id = ${req.params.id}`, (err, data) => {
                    if(err){
                        console.log(err);
                    } else{
                        res.json(data);
                    }
                })}

}