const connection = require("../../config/db");

module.exports = {
    getAllProduct: (req, res) => {
                connection.query(`SELECT * FROM product`, 
                    (err, data) => {
                        if(err){
                            console.log(err);
                        } else{
                            res.json(data);
                        }
                    })},

    getAllProductByID: (req, res) => {
                connection.query(`SELECT * FROM product WHERE id = ${req.params.id}`, (err, data) => {
                    if(err){
                        console.log(err);
                    } else{
                        res.json(data);
                    }
                })}

}