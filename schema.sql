CREATE DATABASE geeB_db;

SHOW DATABASES LIKE 'geeB_db';

USE geeB_db;

DROP TABLE;

CREATE TABLE bglog_tbl
(
	userId								 int(5),
	userName							 char(25),
	dateTimestamp          timestamp, 
	bgMgdl	             	 int(3),
	readingType            char(3),
	notes                  char(50),
	PRIMARY KEY (userId)
);

CREATE TABLE user_tbl
(
	userId 								int(5)  AUTO_INCREMENT, 
	userName							char(25),
	userHash							char(25), 
	PRIMARY KEY (userId)
);

SHOW DATABASES LIKE 'geeB_db';
SHOW COLUMNS from bglog_tbl;
SELECT * from bglog_tbl;
