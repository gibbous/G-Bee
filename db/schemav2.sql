
/* To drop database geeB_db , uncomment this line */

CREATE DATABASE geeB_db;

SHOW DATABASES LIKE 'geeB_db';

USE geeB_db;

DROP TABLE bglog_tbl, user_tbl;

CREATE TABLE bglog_tbl
(
	userId								 int(5),
	userName							 char(25),
	bgMgdl	             	 int(3),
	readingType            char(3),
	notes                  char(50),
	dateTimeActual				 char(25),
	dateTimestamp          timestamp  
	
);

CREATE TABLE user_tbl
(
	userId 								int(5)  AUTO_INCREMENT, 
	userName							char(25),
	userHash							char(25), 
	dateTimestamp          timestamp, 
	PRIMARY KEY (userId)
);

SHOW DATABASES LIKE 'geeB_db';
SHOW TABLES;

SHOW COLUMNS from bglog_tbl;
SELECT * from bglog_tbl;

SHOW COLUMNS from user_tbl;
SELECT * from user_tbl;
