-- start here
-- ***1

-- one tabel for burgers
    -- col for id - INT AUTO_INCREMENT NOT NULL PRIMARY KEY
    -- col for eaten burgers - BOOLEAN NOT NULL
    -- col for burger name - VARCHAR NOT NULL
 
DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers 
(
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(225),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);
