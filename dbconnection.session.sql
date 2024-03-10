DROP DATABASE shopdb;
CREATE DATABASE shopdb;

CREATE TABLE `shopdb`.`category` (
    `category_id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255)
);

CREATE TABLE `shopdb`.`products` (
    `product_id` INT AUTO_INCREMENT PRIMARY KEY,
    `category_id` INT,
    `name` VARCHAR(255),
    `price` DECIMAL(10, 2),
    FOREIGN KEY (`category_id`) REFERENCES `shopdb`.`category`(`category_id`)
);

CREATE TABLE `shopdb`.`orders` (
    `order_id` INT AUTO_INCREMENT PRIMARY KEY,
    `customer_fname` VARCHAR(255),
    `customer_lname` VARCHAR(255)
);

CREATE TABLE `shopdb`.`order_details` (
    `order_detail_id` INT AUTO_INCREMENT PRIMARY KEY,
    `order_id` INT,
    `product_id` INT,
    `quantity` INT DEFAULT 1,
    `color` VARCHAR(255),
    `size` ENUM('XS', 'S', 'M', 'L', 'XL'),
    `qr1` VARCHAR(255),
    `qr2` VARCHAR(255),
    `qr3` VARCHAR(255),
    `qr4` VARCHAR(255),
    `qr5` VARCHAR(255),
    `qr6` VARCHAR(255),
    `qr7` VARCHAR(255),
    `qr8` VARCHAR(255),
    `qr9` VARCHAR(255),
    `qr10` VARCHAR(255),
    `qr11` VARCHAR(255),
    `qr12` VARCHAR(255),
    `qr13` VARCHAR(255),
    `qr14` VARCHAR(255),
    `qr15` VARCHAR(255),
    `qr16` VARCHAR(255),
    `qr17` VARCHAR(255),
    `qr18` VARCHAR(255),
    `qr19` VARCHAR(255),
    `qr20` VARCHAR(255),
    FOREIGN KEY (`order_id`) REFERENCES `shopdb`.`orders`(`order_id`),
    FOREIGN KEY (`product_id`) REFERENCES `shopdb`.`products`(`product_id`)
);

-- Insert category for shirts
INSERT INTO `shopdb`.`category` (`name`)
VALUES ('shirts');

-- Insert category for hoodies
INSERT INTO `shopdb`.`category` (`name`)
VALUES ('hoodies');

-- Insert category for pants
INSERT INTO `shopdb`.`category` (`name`)
VALUES ('pants');

-- Insert category for hats
INSERT INTO `shopdb`.`category` (`name`)
VALUES ('hats');

-- Insert category for umbrellas
INSERT INTO `shopdb`.`category` (`name`)
VALUES ('umbrellas');

INSERT INTO `shopdb`.`products` (`category_id`,`name`,`price`)
VALUES ('1','ROYGBIV Shirt','45.99');

