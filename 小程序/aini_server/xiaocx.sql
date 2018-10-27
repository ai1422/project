SET NAMES utf8;
DROP DATABASE IF EXISTS xiaocx;
CREATE DATABASE xiaocx CHARSET= UTF8;
USE xiaocx;

CREATE TABLE imageslist(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    "img_url" VARCHAR(128),
    "title" VARCHAR(32)
);

INSERT INTO imageslist VALUES
(NULL,'http://127.0.0.1:3000/img/banner01.png','图片1'),
(NULL,'http://127.0.0.1:3000/img/banner02.png','图片2'),
(NULL,'http://127.0.0.1:3000/img/banner03.png','图片3');

CREATE TABLE logs_tup(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    `img_url` VARCHAR(128),
    `title` VARCHAR(128),
    `pric`   DECIMAL(2,10)
);

INSERT INTO logs_tup VALUES
(NULL,'http://127.0.0.1:3000/img/01.png','特惠活动',NULL),
(NULL,'http://127.0.0.1:3000/img/02.png','服务项目',NULL),
(NULL,'http://127.0.0.1:3000/img/03.png','我的门店',NULL),
(NULL,'http://127.0.0.1:3000/img/04.png','招聘信息',NULL);

CREATE TABLE logs_tup2(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    `img_url` VARCHAR(128),
    `title` VARCHAR(128),
    `pric`   DECIMAL(2,10)
);


INSERT INTO logs_tup2 VALUES
(NULL,'http://127.0.0.1:3000/img/1.png','泰式美胸4选1','98.00'),
(NULL,'http://127.0.0.1:3000/img/2.png','永久脱毛液下（体验价）','298.00'),
(NULL,'http://127.0.0.1:3000/img/3.png','肩颈经络疏通调养工程1次','98.00'),
(NULL,'http://127.0.0.1:3000/img/4.png','泰式宫廷胸部有氧激活丰...','198.00'),
(NULL,'http://127.0.0.1:3000/img/5.png','单人脸部深层补水护理','58.00'),
(NULL,'http://127.0.0.1:3000/img/6.png','半永久雾眉','1680.00');

CREATE TABLE shop_detail(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    `img_url` VARCHAR(128),
    `title` VARCHAR(128),
    `oldpric`   DECIMAL(10,2),
    `newpric`   DECIMAL(10,2),
    `title_item` VARCHAR(128)
);
INSERT INTO shop_detail VALUES
(NULL,'http://127.0.0.1:3000/img/1.png','泰式美胸4选1','528.00','98.00',NULL),(NULL,'http://127.0.0.1:3000/img/2.png','永久脱毛液下（体验价）','1188.00','298.00',NULL),
(NULL,'http://127.0.0.1:3000/img/3.png','肩颈经络疏通调养工程1次','200.00','98.00',NULL),
(NULL,'http://127.0.0.1:3000/img/4.png','泰式宫廷胸部有氧激活丰...','1192.00','198.00',NULL),
(NULL,'http://127.0.0.1:3000/img/5.png','单人脸部深层补水护理','208.00','58.00',NULL),
(NULL,'http://127.0.0.1:3000/img/6.png','半永久雾眉','2000.00','1680.00',NULL);