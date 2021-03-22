const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "orderDB"
});

connection.connect((err) => {
    if(err){
        console.log(err.sqlMessage);
    } else{
        console.log("Berhasil koneksi database");
    }
});

const queryAll = `
    SELECT user.id, user.name as nama_user, alamat, kode_pos, userID, productID,
    product.name as nama_product,
    date, harga, deskripsi, total_harga
    FROM user
    LEFT JOIN orders
    ON user.id = userID
    LEFT JOIN product
    ON product.id = productID
`

app.use(express.json());
app.listen(PORT, () => {
    console.log("Running at "+ PORT);
});

//ALL
app.get('/', (req, res) => {
    connection.query(queryAll, 
        (err, data) => {
            if(err){
                console.log(err);
            } else{
                res.json(data);
            }
        });
});

// app.get('/:id', (req, res) => {
//     connection.query(`${queryAll} WHERE user.id = ${req.params.id}`, (err, data) => {
//         if(err){
//             console.log(err);
//         } else{
//             res.json(data);
//         }
//     })
// });


//USER
app.get('/user', (req, res) => {
    connection.query(`SELECT * FROM user`, 
        (err, data) => {
            if(err){
                console.log(err);
            } else{
                res.json(data);
            }
        });
});

app.get('/user/:id', (req, res) => {
    connection.query(`SELECT * FROM user WHERE id = ${req.params.id}`, (err, data) => {
        if(err){
            console.log(err);
        } else{
            res.json(data);
        }
    })
});


//PRODUCT
app.get('/product', (req, res) => {
    connection.query(`SELECT * FROM product`, 
        (err, data) => {
            if(err){
                console.log(err);
            } else{
                res.json(data);
            }
        });
});

app.get('/product/:id', (req, res) => {
    connection.query(`SELECT * FROM product WHERE id = ${req.params.id}`, (err, data) => {
        if(err){
            console.log(err);
        } else{
            res.json(data);
        }
    })
});


//ORDERS
app.get('/orders', (req, res) => {
    connection.query(`SELECT * FROM orders`, 
        (err, data) => {
            if(err){
                console.log(err);
            } else{
                res.json(data);
            }
        });
});

app.get('/orders/:id', (req, res) => {
    connection.query(`SELECT * FROM orders WHERE id = ${req.params.id}`, (err, data) => {
        if(err){
            console.log(err);
        } else{
            res.json(data);
        }
    })
});