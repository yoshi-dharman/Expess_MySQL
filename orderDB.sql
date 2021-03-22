create database orderDB;

use orderDB;

CREATE TABLE user (
	id int Primary key auto_increment,
    name varchar(50),
    alamat varchar(255),
    kode_pos char(5)
);

CREATE TABLE product (
	id int Primary key auto_increment,
    name varchar(50),
    deskripsi varchar(255),
    harga int
);

CREATE TABLE orders (
	id int Primary key auto_increment,
    userID int,
    foreign key (userID) references user(id),
    productID int,
    foreign key (productID) references product(id),
    date date,
    total_harga int
);

INSERT INTO user (name, alamat, kode_pos) 
VALUES ('Andi', 'Aceh', '11111'),
('Bambang', 'Bandung', '22222'),
('Cumi', 'Cipadang', '33333'),
('Draco', 'Denmark', '44444'),
('Elite', 'Eropa', '55555');

INSERT INTO product (name, deskripsi, harga) 
VALUES ('Mouse', 'Cougar mouse gaming Laser 700M', '920000'),
('Keyboard', 'Cougar keyboard 700K Premium Mechanical Gaming', '5200000'),
('Buku', 'Book of Programming Basic', '200000'),
('Laptop', 'Lenovo Legion 7i, NVIDIA® GeForce™ GTX 1660 Ti 6GB', '18000000'),
('Kopi', 'Nescafe French Vanilla', '8000');

INSERT INTO orders (userID, productID, date, total_harga) 
VALUES (1, 1, '2000-01-12', '920000'),
(2, 2, '2000-02-12', '5200000'),
(2, 3, '2000-03-12', '200000'),
(4, 4, '2000-04-12', '18000000'),
(5, 5, '2000-05-12', '16000');
