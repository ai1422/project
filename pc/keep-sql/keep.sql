SET NAMES UTF8;
DROP DATABASE IF EXISTS keep;
CREATE DATABASE keep CHARSET=UTF8;
USE keep;

/**用户信息**/
CREATE TABLE keep_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd  VARCHAR(32),
    email   VARCHAR(64),
    phone   VARCHAR(16),

    avatar    VARCHAR(128),  #头像图片路径
    user_name   VARCHAR(32),  #用户名，
    gender      INT           #性别  0-女 1-男
);

/**课程内容，第一个列表**/
CREATE TABLE  keep_xunlian_product(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    title   VARCHAR(64),   #课程名字
    details  VARCHAR(128),  #课程数量
    pic      VARCHAR(128),  #图片路径
    href     VARCHAR(128)  #链接
);

/**课程内容.第二个列表**/
CREATE TABLE  keep_xunlian_tupian(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    title   VARCHAR(64),   #
    details  VARCHAR(128),  #标题名字
    pic      VARCHAR(128),  #图片路径
    href     VARCHAR(128)  #链接
);


/***********/
/**数据导入**/
/***********/

/**用户信息**/
INSERT INTO keep_user VALUES
(NULL,'dingding','123456','ding@qq.com','13501234567','gotokeep/img/avatar/default.png','丁伟','1'),
(NULL,'dangdang','123456','dang@qq.com','12345678977','gotokeep/img/avatar/default.png','林当','1'),
(NULL,'limei','123456','limei@qq.com','16541854687','gotokeep/img/avatar/default.png','李梅','2'),
(NULL,'hanmei','123456','hanmei@qq.com','15968258277','gotokeep/img/avatar/default.png','韩梅','0');

/**课程内容，第一个列表**/
INSERT INTO keep_xunlian_product VALUES
(NULL,'零噪音系列','2个课程','background-image:url(gotokeep/img/xunlian-main/1.jpg)','product_details.html?lid=1'),
(NULL,'柔韧性提升','9个课程','background-image:url(gotokeep/img/xunlian-main/2.jpg)','product_details.html?lid=2'),
(NULL,'瑜伽·备孕','3个课程','background-image:url(gotokeep/img/xunlian-main/3.jpg)','product_details.html?lid=3'),
(NULL,'肩颈舒缓瑜伽','4个课程','background-image:url(gotokeep/img/xunlian-main/4.jpg)','product_details.html?lid=4'),
(NULL,'帮爸爸按摩','4个课程','background-image:url(gotokeep/img/xunlian-main/5.jpg)','product_details.html?lid=5'),
(NULL,'情人节互动训练','4个课程','background-image:url(gotokeep/img/xunlian-main/6.png)','product_details.html?lid=6'),
(NULL,'热身放松','6个课程','background-image:url(gotokeep/img/xunlian-main/7.jpg)','product_details.html?lid=7'),
(NULL,'伤痛预防','5个课程','background-image:url(gotokeep/img/xunlian-main/8.jpg)','product_details.html?lid=8'),
(NULL,'跑步能力','3各课程','background-image:url(gotokeep/img/xunlian-main/9.jpg)','product_details.html?lid=9'),
(NULL,'李现','2个课程','background-image:url(gotokeep/img/xunlian-main/10.png)','product_details.html?lid=10'),
(NULL,'跑步机课程','13个课程','background-image:url(gotokeep/img/xunlian-main/11.jpg)','product_details.html?lid=11'),
(NULL,'HIIT燃脂','11个课程','background-image:url(gotokeep/img/xunlian-main/12.png)','product_details.html?lid=12'),
(NULL,'搏击操','3个课程','background-image:url(gotokeep/img/xunlian-main/13.png)','product_details.html?lid=13'),
(NULL,'Burpees燃脂','1个课程','background-image:url(gotokeep/img/xunlian-main/14.png)','product_details.html?lid=14'),
(NULL,'心肺激活','4个课程','background-image:url(gotokeep/img/xunlian-main/15.jpg)','product_details.html?lid=15'),
(NULL,'力量激活','5个课程','background-image:url(gotokeep/img/xunlian-main/16.jpg)','product_details.html?lid=16'),
(NULL,'法特莱克跑系列','4个课程','background-image:url(gotokeep/img/xunlian-main/17.jpg)','product_details.html?lid=17'),
(NULL,'燃脂MIIT','3个课程','background-image:url(gotokeep/img/xunlian-main/18.png)','product_details.html?lid=18'),
(NULL,'热身拉伸','3个课程','background-image:url(gotokeep/img/xunlian-main/7.jpg)','product_details.html?lid=19'),
(NULL,'法特莱克跑','4个课程','background-image:url(gotokeep/img/xunlian-main/20.jpg)','product_details.html?lid=20');




/**课程内容，第一个列表**/
INSERT INTO keep_xunlian_tupian VALUES
(NULL,NULL,'胸部','gotokeep/img/xunlian-point/1.png','product_details.html?lid=21'),
(NULL,NULL,'背部','gotokeep/img/xunlian-point/2.png','product_details.html?lid=22'),
(NULL,NULL,'肩部','gotokeep/img/xunlian-point/3.png','product_details.html?lid=23'),
(NULL,NULL,'手臂','gotokeep/img/xunlian-point/4.png','product_details.html?lid=24'),
(NULL,NULL,'颈部','gotokeep/img/xunlian-point/5.png','product_details.html?lid=25'),
(NULL,NULL,'腹部','gotokeep/img/xunlian-point/6.png','product_details.html?lid=26'),
(NULL,NULL,'腰部','gotokeep/img/xunlian-point/7.png','product_details.html?lid=27'),
(NULL,NULL,'臀部','gotokeep/img/xunlian-point/8.png','product_details.html?lid=28'),
(NULL,NULL,'腿部','gotokeep/img/xunlian-point/9.png','product_details.html?lid=29'),
(NULL,NULL,'全身','gotokeep/img/xunlian-point/10.png','product_details.html?lid=30');


