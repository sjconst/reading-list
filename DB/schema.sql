CREATE DATABASE library_db;
USE library_db;
CREATE TABLE reading (
bookID int PRIMARY KEY auto_increment,
title varchar(50) NOT NULL UNIQUE,
authorFirstName varchar(50),
authorLastName varchar(50),
is_read boolean DEFAULT false,
date_read date
);
SELECT * FROM reading;