CREATE DATABASE friends_db;

USE friends_db;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR (255) NOT NULL,
	ans1 INT NOT NULL,
	ans2 INT NOT NULL,
	ans3 INT NOT NULL,
	ans4 INT NOT NULL,
	ans5 INT NOT NULL,
	ans6 INT NOT NULL,
	ans7 INT NOT NULL,
	ans8 INT NOT NULL,
	ans9 INT NOT NULL,
	ans10 INT NOT NULL,
	PRIMARY KEY (id)
);

-- CREATE TABLE test (
-- 	id INT NOT NULL AUTO_INCREMENT,
-- 	name VARCHAR (255) NOT NULL,
-- 	score INT NOT NULL,
-- 	PRIMARY KEY (id)
-- );

-- INSERT INTO test (name, score)
-- VALUES ('leanne', [2, 3, 4, 1, 2, 3, 5, 1, 3, 1]);

