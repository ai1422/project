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

/**课程内容**/
CREATE TABLE  keep_kec(
    lid INT PRIMARY KEY AUTO_INCREMENT,
    family_id   INT,   #编号
    title   VARCHAR(128),   #课程名字
    subtitle  VARCHAR(128)  #课程数量
);

/**课程图片**/
CREATE TABLE keep_kec_pic(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    kec_id   INT,    #课程编号
    imgs    VARCHAR(128),  #图片路径
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

/**课程内容**/
INSERT INTO keep_kec VALUES
(1,1,'零噪音系列','2个课程'),
(2,2,'柔韧性提升','9个课程'),
(3,3,'瑜伽·备孕','3个课程'),
(4,4,'肩颈舒缓瑜伽','4个课程'),
(5,5,'帮爸爸按摩','4个课程'),
(6,6,'情人节互动训练','4个课程'),
(7,7,'热身放松','6个课程'),
(8,8,'伤痛预防','5个课程'),
(9,9,'跑步能力','3各课程'),
(10,10,'李现','2个课程'),
(11,11,'跑步机课程','13个课程'),
(12,12,'HIIT燃脂','11个课程'),
(13,13,'搏击操','3个课程'),
(14,14,'Burpees燃脂','1个课程'),
(15,15,'心肺激活','4个课程'),
(16,16,'力量激活','5个课程'),
(17,17,'法特莱克跑系列','4个课程'),
(18,18,'燃脂MIIT','3个课程'),
(19,19,'热身拉伸','3个课程'),
(20,20,'法特莱克跑','4个课程'),
(21,21,NULL,'胸部'),
(22,22,NULL,'背部'),
(23,23,NULL,'肩部'),
(24,24,NULL,'手臂'),
(25,25,NULL,'颈部'),
(26,26,NULL,'腹部'),
(27,27,NULL,'腰部'),
(28,28,NULL,'臀部'),
(29,29,NULL,'腿部'),
(30,30,NULL,'全身');


/**课程图片**/
INSERT INTO keep_kec_pic VALUES
(NULL,1,'gotokeep/img/xunlian-main/1.jpg'),
(NULL,2,'gotokeep/img/xunlian-main/2.jpg'),
(NULL,3,'gotokeep/img/xunlian-main/3.jpg'),
(NULL,4,'gotokeep/img/xunlian-main/4.jpg'),
(NULL,5,'gotokeep/img/xunlian-main/5.jpg'),
(NULL,6,'gotokeep/img/xunlian-main/6.jpg'),
(NULL,7,'gotokeep/img/xunlian-main/7.jpg'),
(NULL,8,'gotokeep/img/xunlian-main/8.jpg'),
(NULL,9,'gotokeep/img/xunlian-main/9.jpg'),
(NULL,10,'gotokeep/img/xunlian-main/10.png'),
(NULL,11,'gotokeep/img/xunlian-main/11.png'),
(NULL,12,'gotokeep/img/xunlian-main/12.png'),
(NULL,13,'gotokeep/img/xunlian-main/13.png'),
(NULL,14,'gotokeep/img/xunlian-main/14.png'),
(NULL,15,'gotokeep/img/xunlian-main/15.jpg'),
(NULL,16,'gotokeep/img/xunlian-main/16.jpg'),
(NULL,17,'gotokeep/img/xunlian-main/17.jpg'),
(NULL,18,'gotokeep/img/xunlian-main/18.jpg'),
(NULL,19,'gotokeep/img/xunlian-main/7.jpg'),
(NULL,20,'gotokeep/img/xunlian-main/20.jpg'),
(NULL,21,'gotokeep/img/xunlian-point/1.png'),
(NULL,22,'gotokeep/img/xunlian-point/2.png'),
(NULL,23,'gotokeep/img/xunlian-point/3.png'),
(NULL,24,'gotokeep/img/xunlian-point/4.png'),
(NULL,25,'gotokeep/img/xunlian-point/5.png'),
(NULL,26,'gotokeep/img/xunlian-point/6.png'),
(NULL,27,'gotokeep/img/xunlian-point/7.png'),
(NULL,28,'gotokeep/img/xunlian-point/8.png'),
(NULL,29,'gotokeep/img/xunlian-point/9.png'),
(NULL,30,'gotokeep/img/xunlian-point/10.png');



