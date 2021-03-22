const connection = require("../../config/db");

module.exports = {
    getAllOrders: (req, res) => {
                connection.query(`SELECT * FROM orders`, 
                    (err, data) => {
                        if(err){
                            console.log(err);
                        } else{
                            res.json(data);
                        }
                    })},

    getAllOrdersByID: (req, res) => {
                connection.query(`SELECT * FROM orders WHERE id = ${req.params.id}`, (err, data) => {
                    if(err){
                        console.log(err);
                    } else{
                        res.json(data);
                    }
                })}

}