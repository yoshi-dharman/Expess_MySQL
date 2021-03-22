const express = require('express');
const connection = require("./config/db");
const userRouter = require('./router/user');
const ordersRouter = require('./router/orders');
const productRouter = require('./router/product');

const app = express();
const PORT = process.env.PORT || 3000;


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

//USER
app.use('/user', userRouter);

//PRODUCT
app.use('/product', productRouter);

//ORDERS
app.use('/orders', ordersRouter);