CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INT NOT NULL auto_increment,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id)
);