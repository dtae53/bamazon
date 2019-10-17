DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT AUTO_INCREMENT NOT NULL, 
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT(20) NOT NULL,
	PRIMARY KEY (item_id)
);

Select * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Nike Air Foamposite", "Nike", 249.99, 5),
	   ("Yeezy Boost 350", "Adidas", 349.99, 3),
	   ("Air Jordan XI", "Jordan", 210.99, 2),
	   ("Converse Chuck Taylor All star", "Converse", 39.99, 15),
	   ("New Balance 576", "New Balance", 79.99, 10),
	   ("Nike Air Huarache", "Nike", 89.99, 6),
	   ("Adidas Ultraboost", "Adidas", 150.99, 17),
	   ("Air Jordan IV", "Jordan", 275.99, 0),
	   ("Puma Suede Classic", "Puma", 49.99, 12),
	   ("Question Mid", "Reebok", 85.99, 4)